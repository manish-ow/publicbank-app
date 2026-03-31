import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { connectToDatabase } from './mongodb.js';
import { startConsumer } from './kafka.js';
import Account from './models/Account.js';
import Transaction from './models/Transaction.js';

const app = express();
app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: { origin: '*' }
});

io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);
});

app.get('/api/balance', async (req, res) => {
    try {
        await connectToDatabase();
        let account = await Account.findOne({ accountNumber: '312345678901' });
        if (!account) {
            account = new Account({
                accountNumber: '312345678901',
                accountType: 'business',
                balance: 375691.50,
                currency: 'MYR',
                fullName: 'Public Bank App User'
            });
            await account.save();
        }

        res.json({
            totalBalance: account.balance,
            business: { cashBalance: account.balance }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch balance' });
    }
});

async function handleTransactionMessage({ message }) {
    if (!message.value) return;

    try {
        const event = JSON.parse(message.value.toString());
        console.log(`[Consumer] Received event:`, event);

        if (event.type === 'TRANSFER_COMPLETED') {
            await connectToDatabase();

            const account = await Account.findOne({ accountNumber: '312345678901' });
            if (account) {
                if (event.toAccount === '312345678901') {
                    account.balance += Number(event.amount);
                } else if (event.fromAccount === '312345678901') {
                    account.balance -= Number(event.amount);
                }
                await account.save();

                await Transaction.findOneAndUpdate(
                    { reference: event.reference },
                    {
                        $set: {
                            fromAccount: event.fromAccount,
                            toAccount: event.toAccount,
                            amount: event.amount,
                            currency: event.currency,
                            type: 'transfer',
                            status: 'completed'
                        }
                    },
                    { upsert: true }
                );

                console.log(`[Consumer] Updated balance for 312345678901 to ${account.balance}`);

                io.emit('balance_updated', {
                    totalBalance: account.balance,
                    business: { cashBalance: account.balance },
                    lastTransaction: { amount: event.amount, from: event.fromAccount, to: event.toAccount, reference: event.reference }
                });
            } else {
                console.log(`[Consumer] Account not found: 312345678901`);
            }
        }
    } catch (err) {
        console.error('[Consumer] Error processing message:', err);
    }
}

async function start() {
    await connectToDatabase();
    console.log('Connected to MongoDB');

    const count = await Account.countDocuments({ accountNumber: '312345678901' });
    if (count === 0) {
        await Account.create({
            accountNumber: '312345678901',
            accountType: 'business',
            balance: 375691.50,
            currency: 'MYR',
            fullName: 'Public Bank App User'
        });
        console.log('Seeded default account');
    }

    startConsumer(handleTransactionMessage).catch(err => {
        console.warn('Kafka consumer failed to start, running without real-time updates:', err.message);
    });

    const PORT = 3001;
    httpServer.listen(PORT, () => {
        console.log(`Backend server listening on port ${PORT}`);
    });
}

start().catch(console.error);

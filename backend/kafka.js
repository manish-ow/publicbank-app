import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'owbank',
    brokers: [process.env.KAFKA_BROKER],
    ssl: { rejectUnauthorized: false },
    sasl: {
        mechanism: 'plain',
        username: process.env.KAFKA_USERNAME,
        password: process.env.KAFKA_PASSWORD,
    },
    logLevel: logLevel.WARN,
});

export const consumer = kafka.consumer({ groupId: 'owbank-transactions' });
let consumerRunning = false;

export async function startConsumer(handler) {
    if (consumerRunning) return { started: false };

    await consumer.connect();
    await consumer.subscribe({ topic: 'pbb-paymnets', fromBeginning: false });
    await consumer.run({ eachMessage: handler });

    consumerRunning = true;
    console.log('[Kafka] Consumer connected and subscribed to pbb-paymnets');

    const shutdown = async () => {
        console.log('[Kafka] Shutting down consumer...');
        await consumer.disconnect();
        consumerRunning = false;
        process.exit(0);
    };

    process.once('SIGTERM', shutdown);
    process.once('SIGINT', shutdown);

    return { started: true };
}

export function isConsumerRunning() {
    return consumerRunning;
}

export default kafka;

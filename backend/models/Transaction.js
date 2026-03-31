import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema(
    {
        reference: { type: String, required: true, unique: true },
        fromAccount: { type: String, required: true },
        toAccount: { type: String },
        amount: { type: Number, required: true },
        currency: { type: String, default: 'MYR' },
        type: {
            type: String,
            enum: ['transfer', 'deposit', 'withdrawal', 'bill_payment', 'bonus'],
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'completed', 'failed'],
            default: 'pending',
        },
        description: { type: String, default: '' },
        kafkaOffset: { type: String },
        notificationSent: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.models.Transaction ||
    mongoose.model('Transaction', TransactionSchema);

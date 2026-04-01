import React from 'react';
import { text } from '../locales/en';

export default function CashAdvanceApplication({ onBack, onAccept }) {
    return (
        <div style={{ paddingBottom: '20px' }}>
            <div style={{ padding: '10px 0', display: 'flex', alignItems: 'center', marginBottom: '15px', cursor: 'pointer', color: 'var(--primary-red)', fontWeight: 'bold' }} onClick={onBack}>
                <i className="fas fa-chevron-left" style={{ marginRight: '8px' }}></i> Back
            </div>

            <div className="section-card" style={{ textAlign: 'center', padding: '30px 20px' }}>
                <i className="fas fa-money-bill-wave" style={{ fontSize: '3rem', color: 'var(--primary-red)', marginBottom: '15px' }}></i>
                <h2 style={{ margin: '0 0 10px 0', color: 'var(--text-primary)' }}>Cash Advance Offer</h2>

                <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '12px', marginTop: '20px', marginBottom: '30px' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Approved Amount</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--text-primary)', margin: '8px 0' }}>5,000 MYR</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--primary-red)', fontWeight: 'bold' }}>at 3% financing cost</div>
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '25px' }}>
                    By accepting, the funds will be disbursed immediately to your account.
                </p>

                <button
                    onClick={onAccept}
                    style={{
                        width: '100%', padding: '14px', background: 'var(--primary-red)',
                        color: 'white', border: 'none', borderRadius: '8px',
                        fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer'
                    }}
                >
                    Accept Offer
                </button>
            </div>
        </div>
    );
}

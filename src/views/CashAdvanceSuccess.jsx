import React from 'react';

export default function CashAdvanceSuccess({ onFinish }) {
    return (
        <div style={{ paddingBottom: '20px', textAlign: 'center' }}>
            <div className="section-card" style={{ padding: '40px 20px', marginTop: '20px' }}>
                <div style={{ width: '80px', height: '80px', background: '#e1f5e8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                    <i className="fas fa-check" style={{ fontSize: '2.5rem', color: '#16a34a' }}></i>
                </div>

                <h2 style={{ margin: '0 0 15px 0', color: 'var(--text-primary)' }}>Success!</h2>

                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '30px', lineHeight: '1.5' }}>
                    Your cash advance of <strong>5,000 MYR</strong> has been approved and funds have been deposited to your account.
                </p>

                <button
                    onClick={onFinish}
                    style={{
                        width: '100%', padding: '14px', background: 'white',
                        color: 'var(--primary-red)', border: '2px solid var(--primary-red)', borderRadius: '8px',
                        fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: '0.2s'
                    }}
                >
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
}

import React from 'react';

export default function BusinessInsights({ onBack, liveData: data }) {
    const payables = data.business.payablesList;

    return (
        <div style={{ paddingBottom: '20px' }}>
            <div
                style={{
                    padding: '10px 0',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '15px',
                    cursor: 'pointer',
                    color: 'var(--primary-red)',
                    fontWeight: 'bold'
                }}
                onClick={onBack}
            >
                <i className="fas fa-chevron-left" style={{ marginRight: '8px' }}></i> Back
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '8px' }}>Business Insights</h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>Smart recommendations to optimize your business cash flow</p>
            </div>

            <div className="section-card" style={{ borderLeft: '4px solid #16a34a' }}>
                <h3 style={{ fontSize: '1rem', color: '#16a34a', marginBottom: '12px' }}>
                    <i className="fas fa-bolt" style={{ marginRight: '8px' }}></i> Early Payment Optimization
                </h3>
                <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'var(--text-primary)' }}>
                    Your current cash position is strong. We recommend paying the following invoices early to secure <strong>2% early-settlement discounts</strong>:
                </p>

                <div style={{ marginTop: '15px' }}>
                    {payables.slice(0, 2).map((item, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '10px 0',
                            borderTop: index > 0 ? '1px solid #eee' : 'none'
                        }}>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>{item.name}</div>
                            <div style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>MYR {item.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                        </div>
                    ))}
                </div>

                <div style={{
                    marginTop: '15px',
                    padding: '10px',
                    background: '#f0fdf4',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    color: '#166534'
                }}>
                    <strong>Insight:</strong> Settling these early saves you <strong>MYR 92.80</strong> in financing costs and strengthens vendor reliability scores.
                </div>
            </div>

            <div className="section-card" style={{ borderLeft: '4px solid #b31b1b' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--primary-red)', marginBottom: '12px' }}>
                    <i className="fas fa-hand-holding-usd" style={{ marginRight: '8px' }}></i> Professional Financing
                </h3>
                <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'var(--text-primary)' }}>
                    For larger capital-intensive payables, consider <strong>Supply Chain Financing</strong> to preserve your working capital:
                </p>

                <div style={{
                    marginTop: '15px',
                    padding: '15px',
                    background: '#f9f9f9',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{payables[2]?.name || 'Large Invoice'}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>MYR {payables[2]?.amount.toLocaleString('en-US', { minimumFractionDigits: 2 }) || '0.00'}</div>
                    </div>
                    <button style={{
                        padding: '6px 12px',
                        background: 'var(--primary-red)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}>
                        Finance now
                    </button>
                </div>

                <div style={{
                    marginTop: '15px',
                    padding: '10px',
                    background: '#fef2f2',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    color: '#991b1b'
                }}>
                    <strong>Strategy:</strong> Financing this invoice at <strong>3.5% p.a.</strong> allows you to reinvest your current cash (MYR {data.business.cashBalance.toLocaleString()}) into inventory for the upcoming festive season, yielding an estimated <strong>12% ROI</strong>.
                </div>
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import { text } from '../locales/en';
import data from '../data.json';

export default function AccountReceivables({ onBack }) {
    const [activeTab, setActiveTab] = useState('receivables');

    const isReceivables = activeTab === 'receivables';
    const list = isReceivables ? data.business.receivablesList : data.business.payablesList;
    const totalAmount = isReceivables ? data.business.toCollect : data.business.toPay;

    return (
        <div style={{ paddingBottom: '20px' }}>
            <div style={{ padding: '10px 0', display: 'flex', alignItems: 'center', marginBottom: '15px', cursor: 'pointer', color: 'var(--primary-red)', fontWeight: 'bold', fontSize: '1.2rem' }} onClick={onBack}>
                <i className="fas fa-chevron-left" style={{ marginRight: '8px' }}></i> {text.backToDashboard}
            </div>

            <div className="section-card">
                <h2 style={{ margin: '0 0 20px 0', fontSize: '1.2rem', lineHeight: '1.3', color: 'var(--text-primary)' }}>Account Receivables /<br />Payables</h2>

                <div style={{ display: 'flex', gap: '15px', marginBottom: '40px' }}>
                    <div
                        style={{ flex: 1, background: isReceivables ? 'var(--primary-red)' : '#f5f5f5', color: isReceivables ? 'white' : 'var(--text-primary)', borderRadius: '12px', padding: '15px', cursor: 'pointer', transition: 'all 0.2s', boxShadow: isReceivables ? '0 4px 12px rgba(235,10,40,0.2)' : 'none' }}
                        onClick={() => setActiveTab('receivables')}
                    >
                        <div style={{ fontSize: '0.8rem', opacity: isReceivables ? 0.9 : 0.6, marginBottom: '8px' }}>99 Receivables</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{text.currency} {data.business.toCollect.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                    </div>
                    <div
                        style={{ flex: 1, background: !isReceivables ? 'var(--primary-red)' : '#f5f5f5', color: !isReceivables ? 'white' : 'var(--text-primary)', borderRadius: '12px', padding: '15px', cursor: 'pointer', transition: 'all 0.2s', boxShadow: !isReceivables ? '0 4px 12px rgba(235,10,40,0.2)' : 'none' }}
                        onClick={() => setActiveTab('payables')}
                    >
                        <div style={{ fontSize: '0.8rem', opacity: !isReceivables ? 0.9 : 0.6, marginBottom: '8px' }}>87 Payables</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{text.currency} {data.business.toPay.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                    </div>
                </div>

                {/* Donut Chart */}
                <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto 30px auto' }}>
                    <svg viewBox="0 0 100 100" width="100%" height="100%">
                        {/* Background circle */}
                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f5f5f5" strokeWidth="15" />
                        {/* Foreground segments */}
                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--primary-red)" strokeWidth="15" strokeDasharray="180 251.2" strokeDashoffset="0" />
                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#0f5820ff" strokeWidth="15" strokeDasharray="71.2 251.2" strokeDashoffset="-180" />
                    </svg>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{isReceivables ? '15 Customers' : '8 Vendors'}</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '4px', color: 'var(--text-primary)' }}>{text.currency} {totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0f5820ff', marginRight: '6px' }}></div> Upcoming</div>
                    <div style={{ display: 'flex', alignItems: 'center' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-red)', marginRight: '6px' }}></div> Overdue</div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>Your invoices due</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <i className="fas fa-chevron-left" style={{ color: 'var(--text-secondary)', cursor: 'pointer' }}></i>
                        <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>In 1 - 30 days</div>
                        <i className="fas fa-chevron-right" style={{ color: 'var(--text-primary)', cursor: 'pointer' }}></i>
                    </div>
                </div>

                <div style={{ background: '#f5f5f5', borderRadius: '12px', overflow: 'hidden' }}>
                    {list.map((item, index) => (
                        <div key={index} style={{ padding: '15px 20px', borderBottom: index < list.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                            <div style={{ color: 'var(--text-primary)', fontWeight: 'bold', marginBottom: '5px' }}>{item.name}</div>
                            <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{text.currency} {item.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

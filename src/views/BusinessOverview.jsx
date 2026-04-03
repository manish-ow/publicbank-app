import React from 'react';
import { text } from '../locales/en';

export default function BusinessOverview({ onBack, onNavigate, liveData: data }) {
    return (
        <div style={{ paddingBottom: '20px' }}>
            <div
                style={{
                    padding: '10px 0',
                    cursor: 'pointer',
                    color: 'var(--primary-red)',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '15px'
                }}
                onClick={onBack}
            >
                <i className="fas fa-chevron-left" style={{ marginRight: '8px' }}></i> {text.backToDashboard}
            </div>

            <div className="section-card" style={{ cursor: 'pointer' }} onClick={() => onNavigate && onNavigate('forecast')}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <h3 style={{ margin: 0 }}>{text.cashBalanceForecast}</h3>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>{text.currency} {data.business.cashBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                <p style={{ marginBottom: '15px' }}>{text.cashBalanceDesc}</p>

                <div style={{ marginBottom: '10px' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{text.in30Days}</div>
                    <div className="trend-green"><i className="fas fa-caret-up trend-arrow"></i>{text.currency} {data.business.forecast30Days.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                </div>
                <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{text.in60Days}</div>
                    <div className="trend-green"><i className="fas fa-caret-up trend-arrow"></i>{text.currency} {data.business.forecast60Days.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                </div>
            </div>

            <div className="section-card" style={{ cursor: 'pointer' }} onClick={() => onNavigate && onNavigate('receivables')}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <h3 style={{ margin: 0 }}>{text.accountsReceivables}</h3>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <p style={{ marginBottom: '15px' }}>{text.receivablesOverdue}</p>

                <div style={{ marginBottom: '15px' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600' }}>{text.toCollect}</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{text.currency} {data.business.toCollect.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                    {data.business.lastTransaction ? (
                        <div style={{ background: '#f5f5f5', padding: '10px', borderRadius: '8px', marginTop: '15px', fontSize: '0.8rem', color: 'var(--text-secondary)', position: 'relative' }}>
                            You received a recent payment of {text.currency} {data.business.lastTransaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} from eSolution delta pte ltd.
                            <div style={{
                                position: 'absolute',
                                right: '-5px',
                                top: '-25px',
                                background: '#fef08a',
                                color: '#854d0e',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}>
                                New Incoming Transfer
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-4px',
                                    right: '20px',
                                    width: '8px',
                                    height: '8px',
                                    background: '#fef08a',
                                    transform: 'rotate(45deg)'
                                }}></div>
                            </div>
                        </div>
                    ) : (
                        <div style={{ background: '#f5f5f5', padding: '10px', borderRadius: '8px', marginTop: '15px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                            To Collect  {text.currency} {data.business.receivablesList[0].amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} from {data.business.receivablesList[0].name} for invoice INV-OP-2.
                        </div>
                    )}
                </div>

                <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600' }}>{text.toPay}</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{text.currency} {data.business.toPay.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                    <div style={{ background: '#f5f5f5', padding: '10px', borderRadius: '8px', marginTop: '5px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        Your payment of {text.currency} {data.business.payablesList[0].amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} to {data.business.payablesList[0].name} is due in 10 days.
                    </div>
                </div>
            </div>

            <div className="section-card" style={{ padding: '25px 20px' }}>
                <h3 style={{ margin: 0, marginBottom: '15px' }}>{text.linkAccountingPartner}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '25px', lineHeight: '1.5' }}>
                    {text.linkAccountingDesc}
                </p>

                <button style={{
                    width: '100%',
                    padding: '12px',
                    background: 'var(--primary-red)',
                    border: 'none',
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    cursor: 'pointer'
                }}>
                    {text.linkAccountBtn}
                </button>

                <div style={{ textAlign: 'center', fontSize: '0.9rem', fontWeight: 'bold', cursor: 'pointer', color: 'var(--primary-red)' }}>
                    {text.exploreBizSmart}
                </div>
            </div>
        </div>
    );
}

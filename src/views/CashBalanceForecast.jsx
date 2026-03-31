import React from 'react';
import { text } from '../locales/en';

export default function CashBalanceForecast({ onBack, liveData: data }) {
    return (
        <div style={{ paddingBottom: '20px' }}>
            <div style={{ padding: '10px 0', display: 'flex', alignItems: 'center', marginBottom: '15px', cursor: 'pointer', color: 'var(--primary-red)', fontWeight: 'bold' }} onClick={onBack}>
                <i className="fas fa-chevron-left" style={{ marginRight: '8px' }}></i> {text.backToDashboard}
            </div>

            <div className="section-card">
                <h2 style={{ margin: '0 0 20px 0', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Cash Balance Forecast</h2>

                <div style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--text-primary)' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Your estimated cash balance for</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '5px' }}>
                        Very Delicious Restaurant <i className="fas fa-chevron-down" style={{ fontSize: '0.8rem', marginLeft: '5px' }}></i>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '5px' }}>839-203-384-0</div>
                </div>

                {/* Chart Area */}
                <div style={{ position: 'relative', height: '200px', marginBottom: '20px' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{text.currency} ('000)</div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', paddingLeft: '25px', borderLeft: '1px solid rgba(0,0,0,0.1)' }}>
                        <div style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', position: 'relative' }}><span style={{ position: 'absolute', left: '-22px', top: '-7px', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>80</span></div>
                        <div style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', position: 'relative' }}><span style={{ position: 'absolute', left: '-22px', top: '-7px', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>60</span></div>
                        <div style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', position: 'relative' }}><span style={{ position: 'absolute', left: '-22px', top: '-7px', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>40</span></div>
                        <div style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', position: 'relative' }}><span style={{ position: 'absolute', left: '-22px', top: '-7px', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>20</span></div>
                        <div style={{ position: 'relative' }}><span style={{ position: 'absolute', left: '-15px', top: '-7px', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>0</span></div>
                    </div>

                    <svg viewBox="0 0 300 200" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: '25px', width: 'calc(100% - 25px)', height: '100%', overflow: 'visible' }}>
                        <path d="M 0 140 L 100 160 L 200 80 L 300 60" fill="none" stroke="var(--primary-red)" strokeWidth="2" />
                        <path d="M 0 140 L 100 160 L 200 80 L 300 60 L 300 200 L 0 200 Z" fill="rgba(235,10,40,0.05)" />
                        <circle cx="100" cy="160" r="8" fill="var(--primary-red)" />
                        <circle cx="200" cy="80" r="4" fill="var(--primary-red)" />
                        <circle cx="300" cy="60" r="4" fill="var(--primary-red)" />
                    </svg>

                    {/* X Axis Labels */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '25px', marginTop: '10px', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                        <span>Today</span>
                        <span style={{ fontWeight: 'bold', color: 'var(--primary-red)' }}>30D</span>
                        <span>60D</span>
                        <span>90D</span>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', fontSize: '0.8rem', color: 'var(--text-primary)' }}>
                    <i className="fas fa-arrow-right" style={{ marginRight: '8px', color: 'var(--text-secondary)' }}></i> Cash Position
                </div>

                <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Your estimated cash balance</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                        <div style={{ flex: 1 }}></div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>In 30 days</div>
                        <div style={{ flex: 1, textAlign: 'right', cursor: 'pointer', color: 'var(--text-secondary)' }}><i className="fas fa-chevron-right"></i></div>
                    </div>
                </div>

                <div style={{ background: '#f5f5f5', color: 'var(--success-green)', borderRadius: '12px', padding: '20px', textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
                    {text.currency} {data.business.forecast30Days.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>

                <div style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                    <i className="fas fa-chevron-up"></i>
                </div>

                <div style={{ borderTop: '2px solid rgba(0,0,0,0.05)', paddingTop: '15px', paddingBottom: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>Streamline your collections <i className="fas fa-sparkles" style={{ color: '#eab308', marginLeft: '5px' }}></i></div>
                    <i className="fas fa-chevron-right" style={{ color: 'var(--text-secondary)' }}></i>
                </div>
            </div>
        </div>
    );
}

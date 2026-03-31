import React, { useState } from 'react';
import { text } from '../locales/en';
import BusinessOverview from './BusinessOverview';
import CashBalanceForecast from './CashBalanceForecast';
import AccountReceivables from './AccountReceivables';

export default function BusinessBanking({ liveData: data }) {
    const [currentView, setCurrentView] = useState('dashboard');

    if (currentView === 'overview') {
        return <BusinessOverview onBack={() => setCurrentView('dashboard')} onNavigate={setCurrentView} liveData={data} />;
    }

    if (currentView === 'forecast') {
        return <CashBalanceForecast onBack={() => setCurrentView('overview')} liveData={data} />;
    }

    if (currentView === 'receivables') {
        return <AccountReceivables onBack={() => setCurrentView('overview')} liveData={data} />;
    }

    return (
        <div>
            <div className="sme-welcome">{text.welcomeSme}</div>

            <div className="insights-banner">
                <h3 style={{ margin: '0 0 10px 0', fontSize: '1rem' }}>{text.empowerSmeHeading}</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{text.empowerSmeDesc}</p>
                <button className="btn-view">{text.viewBtn}</button>
            </div>

            <div className="assets-list">
                <h3>{text.assetsHeading}</h3>
                <div className="asset-item">
                    <div className="label">{text.totalAvailableBalance}</div>
                    <div className="value" style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{text.currency} {data.totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                </div>
                <div className="asset-item">
                    <div className="label">{text.currentSavingsAccounts}</div>
                    <div className="value" style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{text.currency} {data.business.currentSavings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                </div>
                <div className="asset-item">
                    <div className="label">{text.fixedDepositsInvestments}</div>
                    <div className="value" style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{text.currency} {data.business.fixedDepositsInvestments.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                </div>
            </div>

            {/* <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{
                    display: 'inline-block',
                    background: '#fde047',
                    color: '#854d0e',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    {text.overviewLoans}
                </div>
            </div> */}

            <div className="section-card" style={{ cursor: 'pointer' }} onClick={() => setCurrentView('overview')}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '1rem' }}>{text.businessOverviewHeading}</h3>
                    <i className="fas fa-chevron-right" style={{ color: 'var(--text-secondary)' }}></i>
                </div>
                <p style={{ marginTop: '8px', fontSize: '0.85rem' }}>{text.businessOverviewDesc}</p>
            </div>

            <div className="section-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '1rem' }}>{text.businessServicesHeading}</h3>
                    <i className="fas fa-chevron-right" style={{ color: 'var(--text-secondary)' }}></i>
                </div>
                <p style={{ marginTop: '8px', fontSize: '0.85rem' }}>{text.businessServicesDesc}</p>
            </div>

        </div>
    );
}

import React from 'react';
import { text } from '../locales/en';
import data from '../data.json';

export default function PersonalBanking() {
    return (
        <div>
            <div className="recommendations-wrapper">
                <div className="recommendations-title">{text.recommendations}</div>

                <div className="section-card" style={{ marginBottom: '10px' }}>
                    <h3>{text.cashAdvanceHeading}</h3>
                    <p>{text.cashAdvanceDesc}</p>
                    <div className="link">{text.applyNow}</div>
                </div>

                <div className="section-card" style={{ marginBottom: 0 }}>
                    <h3>{text.investmentOpp}</h3>
                    <p>{text.investmentDesc}</p>
                    <div className="link" style={{ color: 'var(--text-secondary)' }}>{text.exploreMore}</div>
                </div>
            </div>

            <div className="section-card">
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{text.savingsAccounts}</div>
                <div style={{ fontWeight: '600', marginTop: '4px', fontSize: '0.95rem' }}>3924 1500 24</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '8px' }}>{text.currency} {data.personal.savings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>

            <div className="section-card">
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{text.fixedDeposits}</div>
                <div style={{ fontWeight: '600', marginTop: '4px', fontSize: '0.95rem' }}>FD-9921 442</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '8px' }}>{text.currency} {data.personal.fixedDeposits.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>

            <div className="section-card">
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{text.investments}</div>
                <div style={{ fontWeight: '600', marginTop: '4px', fontSize: '0.95rem' }}>Public Mutual Fund</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '8px' }}>{text.currency} {data.personal.investments.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>
        </div>
    );
}

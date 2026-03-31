import React, { useState } from 'react';
import { text } from '../locales/en';
import data from '../data.json';

export default function Header({ activeTab, setActiveTab, notifications = [] }) {
    const [showNotifications, setShowNotifications] = useState(false);
    return (
        <div className="header-top">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{text.home}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <svg style={{ height: '36px' }} viewBox="450 25 250 315" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M697.6,99.27l-70.49-70.49h-102.54l-72.01,72.01v72.19l10.75,10.79-10.75,10.81v72.18l70.47,70.5h105.42l69.14-69.12v-75.06l-9.33-9.36,9.33-9.37v-75.07M575.77,315.66l-85.01-84.98,9.72-9.77,22.56,22.57h105.42l22.64-22.63,9.73,9.72-85.06,85.08ZM537.65,183.76l38.19-38.18,38.11,38.12-38.18,38.18-38.12-38.12ZM651.1,146.51l-23.99-23.97h-102.54l-24.1,24.1-9.72-9.75,85.08-85.08,84.99,84.99-9.73,9.7Z" />
                        </svg>
                        <span style={{
                            fontFamily: '"Arial Black", "Impact", sans-serif',
                            fontWeight: '900',
                            fontSize: '1.3rem',
                            letterSpacing: '1px',
                            color: 'white',
                            whiteSpace: 'nowrap',
                            lineHeight: 1
                        }}>
                            {text.publicBank}
                        </span>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div onClick={() => setShowNotifications(!showNotifications)} style={{ cursor: 'pointer', position: 'relative' }}>
                            <i className="fas fa-bell" style={{ fontSize: '1.4rem', color: 'white' }}></i>
                            {notifications.length > 0 && (
                                <div style={{
                                    position: 'absolute', top: -4, right: -4, width: 10, height: 10,
                                    backgroundColor: '#fff', borderRadius: '50%', border: '2px solid #b31b1b'
                                }}></div>
                            )}
                        </div>
                        {showNotifications && (
                            <div style={{
                                position: 'absolute', top: '30px', right: 0, width: '280px',
                                background: 'white', color: '#333', borderRadius: '8px', zIndex: 1000,
                                boxShadow: '0 4px 12px rgba(0,0,0,0.2)', padding: '15px', textAlign: 'left'
                            }}>
                                <h4 style={{ margin: '0 0 10px 0', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Notifications</h4>
                                {notifications.length > 0 ? notifications.map((notif, index) => (
                                    <div key={index} style={{ fontSize: '0.9rem', marginBottom: '8px', padding: '10px', background: '#f9f9f9', borderLeft: '4px solid #b31b1b', borderRadius: '4px' }}>
                                        <div style={{ fontWeight: 'bold', color: '#b31b1b' }}>{notif.from === '312345678901' ? 'Payment Sent' : 'Payment Received'}</div>
                                        <div style={{ marginTop: '5px' }}>Amount: <span style={{ fontWeight: 'bold' }}>MYR {Number(notif.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span></div>
                                        {notif.from === '312345678901' ? (
                                            <div style={{ color: '#555', fontSize: '0.8rem', marginTop: '2px' }}>To: {notif.to}</div>
                                        ) : (
                                            <div style={{ color: '#555', fontSize: '0.8rem', marginTop: '2px' }}>From: {notif.from}</div>
                                        )}
                                        <div style={{ color: '#555', fontSize: '0.8rem' }}>Ref: {notif.reference}</div>
                                    </div>
                                )) : (
                                    <div style={{ fontSize: '0.9rem', color: '#666' }}>No new notifications</div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="account-info">
                <div className="label">{text.preferredAccount}</div>
                <div className="balance" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {text.currency} {data.totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    <span style={{ fontSize: '1.2rem', opacity: 0.8 }}><i className="fas fa-eye"></i></span>
                </div>
            </div>

            <div className="tabs-container">
                <div
                    className={`tab ${activeTab === 'personal' ? 'active' : ''}`}
                    onClick={() => setActiveTab('personal')}
                >
                    <i className="far fa-user" style={{ marginRight: '5px' }}></i>
                    {text.tabPersonal}
                </div>
                <div
                    className={`tab ${activeTab === 'business' ? 'active' : ''}`}
                    onClick={() => setActiveTab('business')}
                >
                    <i className="fas fa-briefcase" style={{ marginRight: '5px' }}></i>
                    {text.tabBusiness}
                </div>
            </div>
        </div>
    );
}

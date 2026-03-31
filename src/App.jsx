import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Header from './components/Header';
import PersonalBanking from './views/PersonalBanking';
import BusinessBanking from './views/BusinessBanking';
import { text } from './locales/en';
import mockData from './data.json';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('personal');
  const [balanceData, setBalanceData] = useState(null);
  const [toast, setToast] = useState(null);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/balance')
      .then(res => res.json())
      .then(data => {
        setBalanceData({
          ...mockData,
          totalBalance: data.totalBalance,
          business: { ...mockData.business, ...data.business }
        });
      })
      .catch(console.error);

    const socket = io('http://localhost:3001');
    socket.on('balance_updated', (newData) => {
      setBalanceData(prev => ({
        ...prev,
        totalBalance: newData.totalBalance,
        business: { ...prev.business, ...newData.business, lastTransaction: newData.lastTransaction }
      }));

      if (newData.lastTransaction) {
        setNotifications(prev => [{
          ...newData.lastTransaction
        }, ...prev]);
        const isOutgoing = newData.lastTransaction.from === '312345678901';
        const msg = isOutgoing
          ? `Payment Sent: MYR ${Number(newData.lastTransaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })} to ${newData.lastTransaction.to}`
          : `Payment Received: MYR ${Number(newData.lastTransaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })} from ${newData.lastTransaction.from}`;
        setToast(msg);
        setTimeout(() => setToast(null), 5000);
      }
    });

    return () => socket.disconnect();
  }, []);

  if (!balanceData) return <div style={{ padding: 20 }}>Loading...</div>;

  return (
    <div className="mobile-container">
      {toast && (
        <div style={{
          position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)',
          background: 'var(--primary-red)', color: 'white', padding: '12px 20px',
          borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.2)', zIndex: 1000,
          fontWeight: 'bold', fontSize: '0.9rem', width: '90%', textAlign: 'center'
        }}>
          ✅ {toast}
        </div>
      )}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        notifications={notifications}
      />

      <div className="scrollable-content">
        {activeTab === 'personal' ? <PersonalBanking liveData={balanceData} /> : <BusinessBanking liveData={balanceData} />}
      </div>

      <div className="bottom-nav">
        <div className="bottom-nav-item active" style={{ flex: 1 }}>
          <i className="fas fa-home"></i>
          <span>{text.home}</span>
        </div>
        <div className="bottom-nav-item" style={{ flex: 1 }}>
          <i className="fas fa-exchange-alt"></i>
          <span>Transfer</span>
        </div>
        <div className="bottom-nav-item" style={{ flex: 1 }}>
          <i className="fas fa-qrcode"></i>
          <span>DuitNow</span>
        </div>
      </div>
    </div>
  );
}

export default App;

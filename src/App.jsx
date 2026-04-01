import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PersonalBanking from './views/PersonalBanking';
import BusinessBanking from './views/BusinessBanking';
import { text } from './locales/en';
import mockData from './data.json';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('personal');
  const [balanceData, setBalanceData] = useState(null);

  useEffect(() => {
    const vUrl = import.meta.env.VITE_API_URL;
    const apiUrl = vUrl && vUrl !== '/' ? vUrl : 'http://localhost:3001';
    console.log('Connecting to API at:', apiUrl);

    fetch(`${apiUrl}/api/balance`)
      .then(res => res.json())
      .then(data => {
        setBalanceData({
          ...mockData,
          totalBalance: data.totalBalance,
          business: { ...mockData.business, ...data.business }
        });
      })
      .catch(err => {
        console.error('API Fetch Error:', err);
      });
  }, []);

  if (!balanceData) return <div style={{ padding: 20 }}>Loading...</div>;

  return (
    <div className="mobile-container">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
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

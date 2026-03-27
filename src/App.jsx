import React, { useState } from 'react';
import Header from './components/Header';
import PersonalBanking from './views/PersonalBanking';
import BusinessBanking from './views/BusinessBanking';
import { text } from './locales/en';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="mobile-container">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="scrollable-content">
        {activeTab === 'personal' ? <PersonalBanking /> : <BusinessBanking />}
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

import React from 'react';
import './DownloadButtons.css';

const DownloadButtons: React.FC = () => {
  return (
    <div className="download-buttons">
      <a 
        href="#" 
        className="download-btn app-store-btn"
        onClick={(e) => {
          e.preventDefault();
          alert('App Store 링크가 아직 설정되지 않았습니다.');
        }}
      >
        <div className="btn-content">
          <div className="btn-icon">📱</div>
          <div className="btn-text">
            <div className="btn-label">Download on the</div>
            <div className="btn-title">App Store</div>
          </div>
        </div>
      </a>
      
      <a 
        href="#" 
        className="download-btn google-play-btn"
        onClick={(e) => {
          e.preventDefault();
          alert('Google Play 링크가 아직 설정되지 않았습니다.');
        }}
      >
        <div className="btn-content">
          <div className="btn-icon">🎮</div>
          <div className="btn-text">
            <div className="btn-label">GET IT ON</div>
            <div className="btn-title">Google Play</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DownloadButtons;
import React from 'react';
import DownloadButtons from './DownloadButtons';
import { getTexts } from '../utils/texts';
import './HomePage.css';

interface HomePageProps {
  language: 'kr' | 'en';
}

const HomePage: React.FC<HomePageProps> = ({ language }) => {
  const texts = getTexts(language);

  return (
    <div className="homepage">
      <div className="container">
        <header className="header">
          <h1 className="title">{texts.title}</h1>
          <p className="subtitle">{texts.subtitle}</p>
        </header>
        
        <main className="main-content">
          <div className="game-visual">
            <div className="placeholder-image">
              {texts.gamePlaceholder}
            </div>
          </div>
          
          <div className="download-section">
            <h2 className="download-title">{texts.downloadTitle}</h2>
            <DownloadButtons />
          </div>
        </main>
        
        <footer className="footer">
          <div className="language-switcher">
            <a href="/kr" className={language === 'kr' ? 'active' : ''}>한국어</a>
            <span> | </span>
            <a href="/en" className={language === 'en' ? 'active' : ''}>English</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
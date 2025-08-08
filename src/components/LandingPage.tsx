import React from 'react';
import './LandingPage.css';

// Asset imports from local assets folder
import rittyLogo from '../assets/rittyLogo.png';
import rittyImage from '../assets/RittyImage.png';
import appStoreBtn from '../assets/AppStoreButton.png';
import googlePlayBtn from '../assets/GooglePlayButton.png';
import youtubeIcon from '../assets/YoutubeButton.png';
import tiktokIcon from '../assets/TiktokButton.png';
import instagramIcon from '../assets/InstaButton.svg';
import discordIcon from '../assets/DiscordButton.svg';

interface LandingPageProps {
  language?: 'kr' | 'en';
}

const LandingPage: React.FC<LandingPageProps> = ({ language = 'kr' }) => {
  // Content based on language
  const content = {
    kr: {
      heroLines: [
        '말하는 다마고치 키우기!',
        '우주 고양이 리티',
        '지금 입양하세요!'
      ],
      communityTitle: '커뮤니티',
      appStoreUrl: 'https://apps.apple.com/kr/app/id6743311040',
      googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.sammeows.ritty&hl=ko',
      socialLinks: {
        instagram: 'https://www.instagram.com/ritty_kr/',
        discord: 'https://discord.gg/wghaFYCkCV',
        youtube: 'https://www.youtube.com/@Ritty_meow',
        tiktok: 'https://www.tiktok.com/@rittymeow'
      }
    },
    en: {
      heroLines: [
        'Your talking virtual pet',
        'Raise Ritty',
        'The Space Cat'
      ],
      communityTitle: 'Community',
      appStoreUrl: 'https://apps.apple.com/us/app/id6743311040',
      googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.sammeows.ritty&hl=en',
      socialLinks: {
        instagram: 'https://www.instagram.com/ritty_kr/',
        discord: 'https://discord.gg/wghaFYCkCV',
        youtube: 'https://www.youtube.com/@Ritty_meow',
        tiktok: 'https://www.tiktok.com/@rittymeow'
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="landingpage-pc">
      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-gradient">
          <div className="hero-content">
            <div className="hero-left-content">
              {/* Logo */}
              <div className="ritty-logo-container">
                <img className="ritty-logo-image" src={rittyLogo} alt="Ritty Logo" />
              </div>
              
              {/* Hero Text */}
              <div className="hero-text">
                {currentContent.heroLines.map((line, index) => (
                  <div 
                    key={index} 
                    className={`hero-line ${index === 1 ? 'hero-highlight' : ''}`}
                  >
                    {line}
                  </div>
                ))}
              </div>
              
              {/* App Store Buttons */}
              <div className="app-buttons">
                <a href={currentContent.appStoreUrl} className="app-store-button" target="_blank" rel="noopener noreferrer">
                  <img src={appStoreBtn} alt="App Store" />
                </a>
                <a href={currentContent.googlePlayUrl} className="google-play-button" target="_blank" rel="noopener noreferrer">
                  <img src={googlePlayBtn} alt="Google Play" />
                </a>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="hero-image-container">
              <img className="hero-image" src={rittyImage} alt="Ritty Character" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Community Section */}
      <div className="community-section">
        <h2 className="community-title">{currentContent.communityTitle}</h2>
        
        <div className="social-links">
          <a href={currentContent.socialLinks.instagram} className="social-link-button" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href={currentContent.socialLinks.discord} className="social-link-button" target="_blank" rel="noopener noreferrer">
            <img src={discordIcon} alt="Discord" />
          </a>
          <a href={currentContent.socialLinks.youtube} className="social-link-button" target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="YouTube" />
          </a>
          <a href={currentContent.socialLinks.tiktok} className="social-link-button" target="_blank" rel="noopener noreferrer">
            <img src={tiktokIcon} alt="TikTok" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  const navigate = useNavigate();
  const location = useLocation();
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

  const handleLanguageChange = () => {
    const newLanguage = language === 'kr' ? 'en' : 'kr';
    navigate(`/${newLanguage}`);
  };

  return (
    <div className="landingpage-pc">
      {/* Language Switcher */}
      <button 
        className="language-switcher"
        onClick={handleLanguageChange}
        aria-label={language === 'kr' ? 'Switch to English' : '한국어로 변경'}
      >
        {language === 'kr' ? 'EN' : 'KR'}
      </button>

      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-gradient">
          <div className="hero-content">
            <div className="hero-left-content">
              {/* Logo */}
              <div className="ritty-logo-container">
                <img className="ritty-logo-image" src={rittyLogo} alt="리티 Ritty - 현대판 말하는 다마고치! AI 고양이 대화·키우기" />
              </div>
              
              {/* Hero Text */}
              <div className="hero-text">
                {currentContent.heroLines.map((line, index) => {
                  if (index === 1) {
                    return (
                      <h1 key={index} className="hero-line hero-highlight">
                        {line}
                      </h1>
                    );
                  }
                  return (
                    <div key={index} className="hero-line">
                      {line}
                    </div>
                  );
                })}
              </div>
              
              {/* App Store Buttons */}
              <div className="app-buttons">
                <a href={currentContent.appStoreUrl} className="app-store-button" target="_blank" rel="noopener noreferrer" aria-label="리티 iOS 앱 다운로드하기">
                  <img src={appStoreBtn} alt="리티 앱 스토어 다운로드 - iOS" />
                </a>
                <a href={currentContent.googlePlayUrl} className="google-play-button" target="_blank" rel="noopener noreferrer" aria-label="리티 Android 앱 다운로드하기">
                  <img src={googlePlayBtn} alt="리티 구글 플레이 다운로드 - Android" />
                </a>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="hero-image-container">
              <img className="hero-image" src={rittyImage} alt="AI 고양이 리티 앱 스크린샷 - 우주 고양이 캐릭터" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Community Section */}
      <div className="community-section">
        <h2 className="community-title">{currentContent.communityTitle}</h2>
        
        <div className="social-links">
          <a href={currentContent.socialLinks.instagram} className="social-link-button" target="_blank" rel="noopener noreferrer" aria-label="리티 인스타그램 공식 계정 방문하기">
            <img src={instagramIcon} alt="리티 인스타그램 공식 계정" />
          </a>
          <a href={currentContent.socialLinks.discord} className="social-link-button" target="_blank" rel="noopener noreferrer" aria-label="리티 디스코드 커뮤니티 참여하기">
            <img src={discordIcon} alt="리티 디스코드 커뮤니티" />
          </a>
          <a href={currentContent.socialLinks.youtube} className="social-link-button" target="_blank" rel="noopener noreferrer" aria-label="리티 유튜브 채널 구독하기">
            <img src={youtubeIcon} alt="리티 유튜브 채널" />
          </a>
          <a href={currentContent.socialLinks.tiktok} className="social-link-button" target="_blank" rel="noopener noreferrer" aria-label="리티 틱톡 계정 팔로우하기">
            <img src={tiktokIcon} alt="리티 틱톡 계정" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
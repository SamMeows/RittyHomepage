export interface Texts {
  title: string;
  subtitle: string;
  gamePlaceholder: string;
  downloadTitle: string;
  appStore: string;
  googlePlay: string;
}

const koreanTexts: Texts = {
  title: 'Ritty Game',
  subtitle: '새로운 게임 경험을 만나보세요',
  gamePlaceholder: '게임 이미지/비디오 영역',
  downloadTitle: '지금 다운로드하세요!',
  appStore: 'App Store에서 다운로드',
  googlePlay: 'Google Play에서 다운로드'
};

const englishTexts: Texts = {
  title: 'Ritty Game',
  subtitle: 'Experience a new level of gaming',
  gamePlaceholder: 'Game Image/Video Area',
  downloadTitle: 'Download Now!',
  appStore: 'Download on App Store',
  googlePlay: 'Get it on Google Play'
};

export const getTexts = (language: 'kr' | 'en'): Texts => {
  return language === 'kr' ? koreanTexts : englishTexts;
};
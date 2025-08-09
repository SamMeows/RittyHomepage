# OG 이미지 생성 가이드

## OG 이미지란?
Open Graph 이미지로, 소셜 미디어(페이스북, 트위터, 카카오톡 등)에서 링크를 공유할 때 표시되는 미리보기 이미지입니다.

## 현재 상태
✅ **OG 이미지 설정 완료!**
- 현재 `/public/og-image.png`에 리티 캐릭터 이미지가 설정되어 있습니다.
- 메타 태그가 모두 `.png` 형식으로 업데이트되었습니다.

## 권장 사양

### 일반 OG 이미지 (Facebook/Twitter)
- **크기**: 1200 x 630 픽셀
- **비율**: 1.91:1
- **파일 형식**: PNG 또는 JPG
- **파일 크기**: 300KB 이하 권장

### 카카오톡 전용 (선택사항)
- **크기**: 800 x 400 픽셀
- **비율**: 2:1
- **특징**: 카카오톡은 더 넓은 비율 선호
- **참고**: 현재는 일반 OG 이미지를 자동으로 크롭하여 사용 중

## 디자인 가이드라인 (추가 개선 시)
1. **리티 로고** 포함
2. **앱 이름** "리티 Ritty" 명확히 표시
3. **슬로건** "현대판 말하는 다마고치! AI 고양이 대화·키우기"
4. **리티 캐릭터 이미지** 포함 (현재 적용됨)
5. **브랜드 색상** 사용 (보라색 그라데이션 등)

## 카카오톡 전용 이미지 적용 방법 (선택사항)
카카오톡에 최적화된 이미지를 별도로 사용하려면:

1. 800x400 크기의 `og-image-kakao.png` 제작
2. `/public/og-image-kakao.png`에 저장
3. `index.html`의 주석 처리된 카카오톡 메타 태그 활성화:
```html
<meta property="og:image:width" content="800">
<meta property="og:image:height" content="400">
```

## 교체 방법
1. 디자인된 이미지를 `og-image.png` 파일명으로 저장
2. `/public/og-image.png` 경로에 업로드 (현재 파일 교체)
3. 빌드 후 배포: `npm run build`

## 테스트 도구
- Facebook 디버거: https://developers.facebook.com/tools/debug/
- Twitter 카드 검증: https://cards-dev.twitter.com/validator
- 카카오톡 디버거: https://developers.kakao.com/tool/debugger/sharing

## 참고 이미지 소스
현재 사용 가능한 리티 이미지:
- `/src/assets/RittyImage.png` - 리티 캐릭터 이미지
- `/src/assets/rittyLogo.png` - 리티 로고

이 이미지들을 활용하여 1200x630 크기의 OG 이미지를 제작하세요.
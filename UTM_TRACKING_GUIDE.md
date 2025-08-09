# UTM 파라미터를 활용한 유저 유입 경로 추적 가이드

## 1. UTM 파라미터란?
UTM(Urchin Tracking Module) 파라미터는 웹사이트 방문자가 어디서 왔는지 추적하는 태그입니다.

## 2. UTM 파라미터 구성요소
- **utm_source**: 트래픽 소스 (instagram, twitter, tiktok, youtube, linkedin, company-site 등)
- **utm_medium**: 마케팅 매체 (social, email, cpc, organic 등)
- **utm_campaign**: 캠페인 이름 (launch, promotion, event 등)
- **utm_content**: (선택) 콘텐츠 구분 (story, feed, bio 등)
- **utm_term**: (선택) 검색 키워드

## 3. 각 채널별 UTM 링크 예시

### 인스타그램
```
https://ritty.me/?utm_source=instagram&utm_medium=social&utm_campaign=launch
https://ritty.me/?utm_source=instagram&utm_medium=social&utm_campaign=launch&utm_content=story
https://ritty.me/?utm_source=instagram&utm_medium=social&utm_campaign=launch&utm_content=bio
```

### 트위터/X
```
https://ritty.me/?utm_source=twitter&utm_medium=social&utm_campaign=launch
```

### 틱톡
```
https://ritty.me/?utm_source=tiktok&utm_medium=social&utm_campaign=launch
https://ritty.me/?utm_source=tiktok&utm_medium=social&utm_campaign=launch&utm_content=video1
```

### 유튜브
```
https://ritty.me/?utm_source=youtube&utm_medium=social&utm_campaign=launch
https://ritty.me/?utm_source=youtube&utm_medium=social&utm_campaign=launch&utm_content=description
```

### 회사 홈페이지
```
https://ritty.me/?utm_source=company-site&utm_medium=referral&utm_campaign=launch
```

### 링크드인
```
https://ritty.me/?utm_source=linkedin&utm_medium=social&utm_campaign=launch
```

### 디스코드
```
https://ritty.me/?utm_source=discord&utm_medium=community&utm_campaign=launch
```

### 이메일
```
https://ritty.me/?utm_source=newsletter&utm_medium=email&utm_campaign=launch
```

## 4. UTM 링크 생성 도구
Google Campaign URL Builder: https://ga-dev-tools.web.app/campaign-url-builder/

## 5. GA4에서 데이터 확인하기

### 5.1 유입 경로 확인
1. GA4 대시보드 접속
2. **보고서** → **획득** → **트래픽 획득**
3. 여기서 각 utm_source별 방문자 수 확인

### 5.2 앱 다운로드 클릭 추적
1. **보고서** → **참여** → **이벤트**
2. 'download_click' 이벤트 찾기
3. 이벤트 클릭 → 매개변수 확인
   - platform: ios/android
   - utm_source: 유입 경로
   - utm_medium: 매체
   - utm_campaign: 캠페인

### 5.3 커스텀 리포트 만들기
1. **탐색** → **새 탐색 만들기**
2. 측정기준 추가:
   - 이벤트 이름
   - utm_source
   - platform
3. 측정항목 추가:
   - 이벤트 수
   - 사용자 수

## 6. 추적 가능한 데이터

### 자동 추적 (설정 완료)
- ✅ 페이지 방문자 수
- ✅ 유입 경로 (UTM 파라미터)
- ✅ 앱 다운로드 버튼 클릭
- ✅ 클릭한 사람의 유입 경로
- ✅ iOS vs Android 다운로드 비율

### 추가 추적 가능 (필요시 구현)
- 스크롤 깊이
- 페이지 체류 시간
- 언어 변경 클릭
- 소셜 링크 클릭

## 7. 실제 사용 예시

### 시나리오 1: 인스타그램 스토리 광고
1. 스토리에 링크 추가: `https://ritty.me/?utm_source=instagram&utm_medium=social&utm_campaign=story_ad_jan`
2. GA4에서 확인:
   - 몇 명이 방문했는지
   - 그 중 몇 명이 앱 다운로드 버튼을 클릭했는지
   - iOS vs Android 비율

### 시나리오 2: 유튜브 영상 설명란
1. 설명란에 링크 추가: `https://ritty.me/?utm_source=youtube&utm_medium=social&utm_campaign=review_video`
2. GA4에서 확인:
   - 유튜브에서 온 방문자 수
   - 전환율 (다운로드 클릭률)

## 8. 팁
- 각 캠페인마다 고유한 utm_campaign 값 사용
- 링크 단축 서비스(bit.ly 등) 활용 가능
- QR 코드에도 UTM 파라미터 포함 가능
- 정기적으로 GA4 리포트 확인 및 분석

## 9. 주의사항
- UTM 파라미터는 대소문자 구분함
- 띄어쓰기 대신 하이픈(-) 또는 언더스코어(_) 사용
- 일관된 명명 규칙 유지 (예: instagram vs insta 혼용 X)
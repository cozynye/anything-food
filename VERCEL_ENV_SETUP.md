# Vercel 환경 변수 설정 가이드

배포된 사이트에서 메타태그와 기능이 정상적으로 작동하려면 Vercel 대시보드에서 환경 변수를 설정해야 합니다.

## 설정 방법

### 1. Vercel 대시보드 접속
1. [Vercel Dashboard](https://vercel.com/dashboard) 접속
2. `anything-food` 프로젝트 선택

### 2. 환경 변수 추가
1. **Settings** 탭 클릭
2. 왼쪽 메뉴에서 **Environment Variables** 클릭
3. 다음 환경 변수들을 추가:

#### 필수 환경 변수

```bash
# Kakao Maps API Key
NEXT_PUBLIC_KAKAO_MAP_API_KEY=9b829d977efe33c6b2e260385b2d6c1b

# Site URL
NEXT_PUBLIC_SITE_URL=https://anything-food.vercel.app

# Google Search Console 인증
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=mJkJTBBd_7dbU9mLZXwirvRk_8r34RENokY5OZPTz4A

# Naver Search Advisor 인증
NEXT_PUBLIC_NAVER_SITE_VERIFICATION=61559f9445f6cb441cb55cf213162651e76d8005
```

#### 선택 환경 변수

```bash
# Kakao REST API Key (필요시)
KAKAO_REST_API_KEY=794b4376ff9a6caede848f7f9ae076c4

# Application URL
NEXT_PUBLIC_APP_URL=https://anything-food.vercel.app
```

### 3. 환경 적용 범위 설정
각 환경 변수마다 다음 옵션 선택:
- ✅ **Production** (프로덕션)
- ✅ **Preview** (프리뷰)
- ✅ **Development** (개발, 선택사항)

### 4. 재배포
환경 변수 설정 후 재배포가 필요합니다:

#### 옵션 1: Vercel 대시보드에서
1. **Deployments** 탭으로 이동
2. 최신 배포 옆의 **⋮** (더보기) 클릭
3. **Redeploy** 선택
4. **Redeploy** 버튼 클릭

#### 옵션 2: Git 푸시로 자동 배포
```bash
git add .
git commit -m "Update environment variables"
git push origin main
```

### 5. 배포 확인
배포 완료 후 다음 항목을 확인하세요:

#### 메타태그 확인
1. 배포된 사이트 접속: https://anything-food.vercel.app
2. 브라우저 개발자 도구 (F12) 열기
3. Elements 탭 → `<head>` 태그 확인
4. 다음 메타태그들이 있는지 확인:
   ```html
   <meta name="google-site-verification" content="mJkJTBBd_7dbU9mLZXwirvRk_8r34RENokY5OZPTz4A" />
   <meta name="naver-site-verification" content="61559f9445f6cb441cb55cf213162651e76d8005" />
   <meta property="og:url" content="https://anything-food.vercel.app" />
   <meta property="og:image" content="https://anything-food.vercel.app/icons/lunch-og.png" />
   ```

#### 기능 확인
- ✅ 카카오맵이 정상적으로 로드되는지
- ✅ 현재 위치 검색이 작동하는지
- ✅ 맛집 검색이 정상적으로 동작하는지

## 문제 해결

### 환경 변수가 반영되지 않는 경우
1. Vercel 대시보드에서 환경 변수가 제대로 저장되었는지 확인
2. 환경 변수 이름에 오타가 없는지 확인 (대소문자 구분)
3. Production, Preview 체크박스가 선택되었는지 확인
4. 재배포 실행

### 카카오맵이 로드되지 않는 경우
1. `NEXT_PUBLIC_KAKAO_MAP_API_KEY` 환경 변수 확인
2. Kakao Developers에서 도메인 설정 확인:
   - https://anything-food.vercel.app 추가
   - https://*.vercel.app 패턴 추가 (선택사항)

### 메타태그가 업데이트되지 않는 경우
1. 브라우저 캐시 삭제 (Ctrl/Cmd + Shift + R)
2. 시크릿/프라이빗 모드로 접속
3. Vercel 배포 로그 확인

## 참고 링크
- [Vercel Environment Variables 문서](https://vercel.com/docs/environment-variables)
- [Kakao Developers](https://developers.kakao.com/)
- [Google Search Console](https://search.google.com/search-console)
- [Naver Search Advisor](https://searchadvisor.naver.com)

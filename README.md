# Lunch Buddy 🍱

직장인을 위한 점심 맛집 추천 서비스

## 🎯 주요 기능

- 📍 **현재 위치 기반** 맛집 추천
- 🔍 **주소 검색**으로 지역 선택
- 🍜 **음식 종류 필터** (한식, 양식, 중식, 일식, 술집)
- 📏 **반경 선택** (500m, 1km, 2km)
- 🔄 **다시 추천하기** (셔플 알고리즘)
- 🗺️ **카카오 지도** 연동

## 🛠️ 기술 스택

- **Framework**: Next.js 15.1.2 (App Router)
- **Language**: TypeScript 5.7+
- **Styling**: Vanilla Extract (제로 런타임 CSS-in-TypeScript)
- **UI**: shadcn/ui (Radix UI 기반)
- **State**: React Context + Hooks
- **Map**: Kakao Maps SDK

## 📁 프로젝트 구조 (Feature-First)

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지
│   ├── theme.css.ts       # 디자인 토큰
│   └── globals.css.ts     # 전역 스타일
│
├── features/              # 기능별 모듈
│   ├── map/              # 지도 기능
│   │   ├── components/   # RestaurantMap, MapControls
│   │   ├── hooks/        # useKakaoMap, useKakaoLoader
│   │   ├── utils/        # 지도 유틸리티
│   │   └── types.ts
│   ├── restaurant/       # 맛집 기능
│   │   ├── components/   # RestaurantCard, RestaurantList
│   │   ├── hooks/        # useRestaurants, useRecommendation
│   │   ├── api.ts        # Kakao Places API
│   │   └── types.ts
│   ├── filter/          # 필터 기능
│   │   ├── components/   # FilterPanel, CategoryFilter
│   │   ├── hooks/        # useFilter
│   │   └── types.ts
│   └── location/        # 위치 기능
│       ├── components/   # LocationButton, SearchBar
│       ├── hooks/        # useGeolocation, useAddressSearch
│       └── types.ts
│
├── components/           # 공통 컴포넌트
│   ├── ui/              # shadcn/ui (Button, Select, Toast)
│   └── layout/          # Header, Footer
│
└── lib/                 # 유틸리티
    ├── utils.ts         # 일반 유틸리티
    ├── distance.ts      # Haversine formula
    ├── constants.ts     # 전역 상수
    └── cn.ts            # className 병합
```

## 🚀 시작하기

### 1. 의존성 설치
```bash
pnpm install
```

### 2. 환경 변수 설정
`.env.local` 파일을 생성하고 필요한 환경 변수를 설정하세요:

```env
# Kakao Maps API 키 (필수)
NEXT_PUBLIC_KAKAO_MAP_API_KEY=your_kakao_api_key_here

# 사이트 URL (필수)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> 💡 `.env.example` 파일을 참고하세요!
>
> **참고**: Google/Naver 사이트 인증 메타태그는 `src/app/layout.tsx`에 직접 설정되어 있습니다.

### 3. 개발 서버 실행
```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

## 📝 주요 개발 명령어

```bash
# 개발 서버
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 실행
pnpm start

# 린트 검사
pnpm lint

# 타입 체크
pnpm type-check
```

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary (Orange)**: 점심의 따뜻함 (#F97316)
- **Secondary (Blue)**: 신뢰와 안정 (#3B82F6)
- **Accent (Yellow)**: 맛있음과 활기 (#EAB308)

### Vanilla Extract 사용
```typescript
import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const button = style({
  backgroundColor: vars.color.primary[500],
  color: vars.color.text.inverse,
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.borderRadius.md,
});
```

## 🗺️ Kakao Maps API

### API 키 발급
1. [Kakao Developers](https://developers.kakao.com/) 접속
2. 애플리케이션 생성
3. JavaScript 키 발급
4. 웹 플랫폼 등록 (http://localhost:3000)

## 📦 주요 의존성

- `next` - React 프레임워크
- `react-kakao-maps-sdk` - 카카오 지도 SDK
- `@vanilla-extract/css` - CSS-in-TypeScript
- `@radix-ui/*` - 접근성 우수한 UI 컴포넌트
- `clsx` - className 유틸리티
- `class-variance-authority` - 스타일 변형 관리

## 🔧 개발 가이드

### 새 기능 추가
1. `src/features/` 아래에 기능별 폴더 생성
2. `components/`, `hooks/`, `types.ts` 구조 유지
3. 기능 완료 후 `README.md` 업데이트

### 공통 컴포넌트 추가
1. `src/components/ui/` 또는 `layout/`에 추가
2. Vanilla Extract로 스타일링
3. 타입 정의 포함

## 📄 라이선스

MIT

## 🙋‍♂️ 문의

이슈를 남겨주세요!

import type { Coordinates } from '../features/restaurant/types';

// 기본 중심점 (서울 시청)
export const DEFAULT_CENTER: Coordinates = {
  lat: 37.5665,
  lng: 126.978,
};

// 기본 반경 (미터)
export const DEFAULT_RADIUS = 500;

// 지도 기본 레벨
export const DEFAULT_MAP_LEVEL = 5;

// 검색 결과 최대 개수
export const MAX_SEARCH_RESULTS = 15;

// 추천 개수
export const RECOMMENDATION_COUNT = 5;

// 디바운스 지연 (ms)
export const SEARCH_DEBOUNCE_DELAY = 300;

// 위치 권한 타임아웃 (ms)
export const GEOLOCATION_TIMEOUT = 5000;

// 점심 시간
export const LUNCH_TIME = {
  start: '11:00',
  end: '14:00',
};

// 카테고리 아이콘
export const CATEGORY_ICONS: Record<string, string> = {
  한식: '🍚',
  양식: '🍝',
  중식: '🥟',
  일식: '🍱',
  술집: '🍺',
  기타: '🍽️',
};

'use client';

import { useKakaoLoader as useKakaoLoaderSDK } from 'react-kakao-maps-sdk';

/**
 * Kakao Maps SDK를 로드하는 훅
 */
export function useKakaoLoader() {
  const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY;

  if (!apiKey) {
    console.error('Kakao Maps API 키가 설정되지 않았습니다.');
    return;
  }

  useKakaoLoaderSDK({
    appkey: apiKey,
    libraries: ['services', 'clusterer'],
  });
}

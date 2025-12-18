'use client';

import { useState, useCallback } from 'react';
import type { Coordinates } from '@/features/restaurant/types';

export interface SearchResult {
  name: string;
  roadAddress?: string;
  coordinates: Coordinates;
}

export interface UseAddressSearchReturn {
  query: string;
  setQuery: (query: string) => void;
  results: SearchResult[];
  isLoading: boolean;
  error: string | null;
  search: (searchQuery: string) => void;
  selectResult: (result: SearchResult) => void;
}

/**
 * 주소 검색 훅 (Kakao Geocoder API 사용)
 */
export function useAddressSearch(
  onLocationSelect?: (coordinates: Coordinates) => void
): UseAddressSearchReturn {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    const kakao = (window as any).kakao;
    if (!kakao || !kakao.maps || !kakao.maps.services) {
      setError('카카오 지도 API가 로드되지 않았습니다.');
      setIsLoading(false);
      return;
    }

    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(searchQuery, (result: any[], status: any) => {
      setIsLoading(false);

      if (status === kakao.maps.services.Status.OK && result.length > 0) {
        const searchResults = result.map((item) => ({
          name: item.address_name,
          roadAddress: item.road_address?.address_name,
          coordinates: {
            lat: parseFloat(item.y),
            lng: parseFloat(item.x),
          },
        }));
        setResults(searchResults);
        setError(null);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        setResults([]);
        setError('검색 결과가 없습니다.');
      } else {
        setResults([]);
        setError('주소 검색 중 오류가 발생했습니다.');
      }
    });
  }, []);

  const selectResult = useCallback(
    (result: SearchResult) => {
      setQuery(result.roadAddress || result.name);
      setResults([]);
      onLocationSelect?.(result.coordinates);
    },
    [onLocationSelect]
  );

  return {
    query,
    setQuery,
    results,
    isLoading,
    error,
    search,
    selectResult,
  };
}

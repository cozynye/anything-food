import { useState, useCallback } from 'react';
import type { Restaurant } from '../types';
import { RECOMMENDATION_COUNT } from '@/lib/constants';

interface UseRecommendationReturn {
  recommended: Restaurant[];
  history: Set<string>;
  recommend: (limit?: number) => void;
  resetHistory: () => void;
}

/**
 * Fisher-Yates 셔플 알고리즘을 사용한 추천 시스템
 */
export function useRecommendation(restaurants: Restaurant[]): UseRecommendationReturn {
  const [recommended, setRecommended] = useState<Restaurant[]>([]);
  const [history, setHistory] = useState<Set<string>>(new Set());

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const recommend = useCallback(
    (limit: number = RECOMMENDATION_COUNT) => {
      if (restaurants.length === 0) {
        setRecommended([]);
        return;
      }

      // 아직 추천되지 않은 식당 필터링
      const unvisited = restaurants.filter((r) => !history.has(r.id));

      // 모든 식당을 이미 추천했다면 히스토리 초기화
      const pool = unvisited.length > 0 ? unvisited : restaurants;
      const shouldResetHistory = unvisited.length === 0;

      // 셔플 후 상위 N개 선택
      const shuffled = shuffleArray(pool);
      const selected = shuffled.slice(0, Math.min(limit, shuffled.length));

      // 히스토리 업데이트
      const newHistory = shouldResetHistory ? new Set<string>() : new Set(history);
      selected.forEach((r) => newHistory.add(r.id));

      setHistory(newHistory);
      setRecommended(selected);
    },
    [restaurants, history]
  );

  const resetHistory = useCallback(() => {
    setHistory(new Set());
  }, []);

  return { recommended, history, recommend, resetHistory };
}

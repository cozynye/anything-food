import { useState, useCallback, useMemo } from 'react';
import type { Restaurant } from '../../restaurant/types';
import type { FilterState } from '../types';
import { DEFAULT_FILTER } from '../types';

interface UseFilterReturn {
  filter: FilterState;
  filtered: Restaurant[];
  updateFilter: (updates: Partial<FilterState>) => void;
  resetFilter: () => void;
}

/**
 * 맛집 필터링을 관리하는 훅
 */
export function useFilter(restaurants: Restaurant[]): UseFilterReturn {
  const [filter, setFilter] = useState<FilterState>(DEFAULT_FILTER);

  const filtered = useMemo(() => {
    return restaurants.filter((restaurant) => {
      // 카테고리 필터
      if (filter.categories.length > 0) {
        if (!filter.categories.includes(restaurant.category)) {
          return false;
        }
      }

      // 가격대 필터
      if (filter.priceRange && restaurant.priceRange !== filter.priceRange) {
        return false;
      }

      // 영업중 필터
      if (filter.onlyOpen && restaurant.isOpen === false) {
        return false;
      }

      // 반경 필터는 이미 API 검색에서 처리됨
      return true;
    });
  }, [restaurants, filter]);

  const updateFilter = useCallback((updates: Partial<FilterState>) => {
    setFilter((prev) => ({ ...prev, ...updates }));
  }, []);

  const resetFilter = useCallback(() => {
    setFilter(DEFAULT_FILTER);
  }, []);

  return { filter, filtered, updateFilter, resetFilter };
}

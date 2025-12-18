import type { FoodCategory, PriceRange } from '../restaurant/types';

export interface FilterState {
  categories: FoodCategory[];
  priceRange: PriceRange | null;
  radius: number; // meters (500, 1000, 2000)
  onlyOpen: boolean; // 영업중만 보기
}

export const DEFAULT_FILTER: FilterState = {
  categories: [],
  priceRange: null,
  radius: 500,
  onlyOpen: true,
};

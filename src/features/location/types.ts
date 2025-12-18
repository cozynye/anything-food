import type { Coordinates } from '../restaurant/types';

export interface LocationState {
  current: Coordinates | null;
  isLoading: boolean;
  error: string | null;
}

export interface SearchResult {
  name: string;
  roadAddress?: string;
  coordinates: Coordinates;
}

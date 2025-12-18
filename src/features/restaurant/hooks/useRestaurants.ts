import { useState, useCallback } from 'react';
import type { Restaurant, Coordinates, FoodCategory } from '../types';
import { calculateDistance } from '@/lib/distance';
import { getCategoryKeyword, inferCategory } from '@/lib/utils';
import { MAX_SEARCH_RESULTS } from '@/lib/constants';

interface UseRestaurantsReturn {
  restaurants: Restaurant[];
  isLoading: boolean;
  error: string | null;
  searchRestaurants: (
    center: Coordinates,
    category: FoodCategory | null,
    radius: number
  ) => Promise<void>;
}

/**
 * Kakao Places API를 사용하여 맛집을 검색하는 훅
 */
export function useRestaurants(): UseRestaurantsReturn {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchRestaurants = useCallback(
    async (
      center: Coordinates,
      category: FoodCategory | null,
      radius: number
    ) => {
      const kakao = (window as any).kakao;

      if (!kakao || !kakao.maps || !kakao.maps.services) {
        setError('카카오맵 서비스를 로드할 수 없습니다');
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const places = new kakao.maps.services.Places();
        const keyword = category ? getCategoryKeyword(category) : '맛집';

        const searchPromise = new Promise<Restaurant[]>((resolve) => {
          places.keywordSearch(
            keyword,
            (result: any[], status: any) => {
              if (status === kakao.maps.services.Status.OK) {
                const foundRestaurants = result
                  .map((place) => {
                    const coords = {
                      lat: parseFloat(place.y),
                      lng: parseFloat(place.x),
                    };
                    const distance = calculateDistance(
                      center.lat,
                      center.lng,
                      coords.lat,
                      coords.lng
                    );

                    return {
                      id: place.id,
                      name: place.place_name,
                      category: category || (inferCategory(place.category_name) as FoodCategory),
                      address: place.address_name,
                      roadAddress: place.road_address_name,
                      coordinates: coords,
                      phone: place.phone,
                      distance,
                    };
                  })
                  .filter((restaurant) => restaurant.distance <= radius)
                  .sort((a, b) => (a.distance || 0) - (b.distance || 0));

                resolve(foundRestaurants);
              } else {
                resolve([]);
              }
            },
            {
              location: new kakao.maps.LatLng(center.lat, center.lng),
              radius: radius,
              size: MAX_SEARCH_RESULTS,
            }
          );
        });

        const results = await searchPromise;
        setRestaurants(results);
      } catch (err) {
        setError('맛집 검색 중 오류가 발생했습니다');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { restaurants, isLoading, error, searchRestaurants };
}

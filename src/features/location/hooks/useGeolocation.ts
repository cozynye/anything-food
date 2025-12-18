import { useState, useCallback } from 'react';
import type { Coordinates } from '../../restaurant/types';
import { DEFAULT_CENTER, GEOLOCATION_TIMEOUT } from '@/lib/constants';

interface UseGeolocationReturn {
  location: Coordinates | null;
  isLoading: boolean;
  error: string | null;
  getCurrentLocation: () => void;
}

/**
 * 브라우저 Geolocation API를 사용하여 현재 위치를 가져오는 훅
 */
export function useGeolocation(): UseGeolocationReturn {
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError('브라우저가 위치 서비스를 지원하지 않습니다');
      setLocation(DEFAULT_CENTER); // Fallback
      return;
    }

    setIsLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        let errorMessage = '위치를 가져올 수 없습니다';

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = '위치 권한을 허용해주세요';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = '위치 정보를 사용할 수 없습니다';
            break;
          case error.TIMEOUT:
            errorMessage = '위치 요청 시간이 초과되었습니다';
            break;
        }

        setError(errorMessage);
        setLocation(DEFAULT_CENTER); // Fallback to Seoul City Hall
        setIsLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: GEOLOCATION_TIMEOUT,
        maximumAge: 0,
      }
    );
  }, []);

  return { location, isLoading, error, getCurrentLocation };
}

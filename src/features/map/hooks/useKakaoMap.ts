import { useRef, useState, useCallback, useEffect } from 'react';
import type { Coordinates } from '../../restaurant/types';

interface UseKakaoMapReturn {
  mapRef: React.RefObject<HTMLDivElement>;
  map: any | null;
  center: Coordinates;
  level: number;
  moveCenter: (coordinates: Coordinates) => void;
  setLevel: (level: number) => void;
}

/**
 * Kakao Map 인스턴스를 관리하는 훅
 */
export function useKakaoMap(
  initialCenter: Coordinates,
  initialLevel: number = 5
): UseKakaoMapReturn {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [center, setCenter] = useState<Coordinates>(initialCenter);
  const [level, setLevelState] = useState(initialLevel);

  const moveCenter = useCallback(
    (coordinates: Coordinates) => {
      if (map) {
        const kakao = (window as any).kakao;
        const newCenter = new kakao.maps.LatLng(coordinates.lat, coordinates.lng);
        map.setCenter(newCenter);
        setCenter(coordinates);
      }
    },
    [map]
  );

  const setLevel = useCallback(
    (newLevel: number) => {
      if (map) {
        map.setLevel(newLevel);
        setLevelState(newLevel);
      }
    },
    [map]
  );

  return {
    mapRef,
    map,
    center,
    level,
    moveCenter,
    setLevel,
  };
}

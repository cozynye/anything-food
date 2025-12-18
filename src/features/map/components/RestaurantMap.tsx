'use client';

import { useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import type { Restaurant, Coordinates } from '../../restaurant/types';
import { DEFAULT_MAP_LEVEL } from '@/lib/constants';
import { mapContainer } from './RestaurantMap.css';

interface RestaurantMapProps {
  center: Coordinates;
  restaurants: Restaurant[];
  onCenterChanged?: (center: Coordinates) => void;
  onMarkerClick?: (restaurant: Restaurant) => void;
}

export function RestaurantMap({
  center,
  restaurants,
  onCenterChanged,
  onMarkerClick,
}: RestaurantMapProps) {
  return (
    <div className={mapContainer}>
      <Map
        center={{ lat: center.lat, lng: center.lng }}
        level={DEFAULT_MAP_LEVEL}
        style={{ width: '100%', height: '100%' }}
        onCenterChanged={(map) => {
          if (onCenterChanged) {
            const newCenter = map.getCenter();
            onCenterChanged({
              lat: newCenter.getLat(),
              lng: newCenter.getLng(),
            });
          }
        }}
      >
        {/* 현재 위치 마커 */}
        <MapMarker
          position={{ lat: center.lat, lng: center.lng }}
          image={{
            src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
            size: { width: 24, height: 35 },
          }}
        />

        {/* 맛집 마커들 */}
        {restaurants.map((restaurant) => (
          <MapMarker
            key={restaurant.id}
            position={{
              lat: restaurant.coordinates.lat,
              lng: restaurant.coordinates.lng,
            }}
            onClick={() => onMarkerClick?.(restaurant)}
            title={restaurant.name}
          />
        ))}
      </Map>
    </div>
  );
}

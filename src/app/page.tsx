"use client";

import { useEffect, useState } from "react";
import { useKakaoLoader } from "@/features/map/hooks/useKakaoLoader";
import { useGeolocation } from "@/features/location/hooks/useGeolocation";
import { useRestaurants } from "@/features/restaurant/hooks/useRestaurants";
import { useRecommendation } from "@/features/restaurant/hooks/useRecommendation";
import { useFilter } from "@/features/filter/hooks/useFilter";
import { RestaurantMap } from "@/features/map/components/RestaurantMap";
import { FilterPanel } from "@/features/filter/components/FilterPanel";
import { LocationButton } from "@/features/location/components/LocationButton";
import { SearchBar } from "@/features/location/components/SearchBar";
import { RecommendButton } from "@/features/restaurant/components/RecommendButton";
import { RestaurantCard } from "@/features/restaurant/components/RestaurantCard";
import type { FoodCategory } from "@/features/restaurant/types";
import { DEFAULT_CENTER } from "@/lib/constants";
import {
  container,
  header,
  title,
  main,
  section,
  sectionTitle,
  controlsRow,
  restaurantGrid,
  emptyState,
  loadingState,
} from "./page.css";

export default function HomePage() {
  // Kakao Maps SDK 로드
  useKakaoLoader();

  // 위치 감지
  const {
    location,
    isLoading: locationLoading,
    getCurrentLocation,
  } = useGeolocation();
  const [currentCenter, setCurrentCenter] = useState(DEFAULT_CENTER);

  // 맛집 검색
  const {
    restaurants,
    isLoading: restaurantsLoading,
    searchRestaurants,
  } = useRestaurants();

  // 필터
  const { filter, filtered, updateFilter } = useFilter(restaurants);

  // 추천
  const { recommended, recommend } = useRecommendation(
    filtered.length > 0 ? filtered : restaurants
  );

  // 초기 로드 시 현재 위치로 검색
  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  // 위치 변경 시 중심점 업데이트 및 검색
  useEffect(() => {
    if (location) {
      setCurrentCenter(location);
      searchRestaurants(location, null, filter.radius);
    }
  }, [location, filter.radius, searchRestaurants]);

  // 카테고리 토글
  const handleCategoryToggle = (category: FoodCategory) => {
    const newCategories = filter.categories.includes(category)
      ? filter.categories.filter((c) => c !== category)
      : [...filter.categories, category];
    updateFilter({ categories: newCategories });
  };

  // 주소 검색 결과 선택 시
  const handleLocationSelect = (coordinates: typeof DEFAULT_CENTER) => {
    setCurrentCenter(coordinates);
    searchRestaurants(coordinates, null, filter.radius);
  };

  // 추천 실행
  useEffect(() => {
    if (restaurants.length > 0) {
      recommend();
    }
  }, [restaurants]);

  const displayRestaurants = recommended.length > 0 ? recommended : filtered;

  return (
    <div className={container}>
      <header className={header}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="/icons/representive.png"
            alt="아무거나 로고"
            style={{ width: "48px", height: "48px", borderRadius: "12px" }}
          />
          <h1 className={title}>아무거나</h1>
        </div>
      </header>

      <main className={main}>
        {/* 컨트롤 섹션 */}
        <section className={section}>
          <SearchBar
            onLocationSelect={handleLocationSelect}
            placeholder="주소를 검색하세요 (예: 서울 강남구)"
          />
          <div className={controlsRow}>
            <LocationButton
              onClick={getCurrentLocation}
              isLoading={locationLoading}
            />
            <RecommendButton
              onClick={() => recommend()}
              disabled={restaurants.length === 0}
            />
          </div>
        </section>

        {/* 필터 섹션 */}
        <section className={section}>
          <FilterPanel
            selectedCategories={filter.categories}
            selectedRadius={filter.radius}
            onCategoryToggle={handleCategoryToggle}
            onRadiusChange={(radius) => updateFilter({ radius })}
          />
        </section>

        {/* 지도 섹션 */}
        <section className={section}>
          <h2 className={sectionTitle}>📍 지도</h2>
          <RestaurantMap
            center={currentCenter}
            restaurants={displayRestaurants}
          />
        </section>

        {/* 추천 리스트 섹션 */}
        <section className={section}>
          <h2 className={sectionTitle}>
            ✨ 오늘의 추천 ({displayRestaurants.length}개)
          </h2>

          {restaurantsLoading ? (
            <div className={loadingState}>검색 중...</div>
          ) : displayRestaurants.length > 0 ? (
            <div className={restaurantGrid}>
              {displayRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          ) : (
            <div className={emptyState}>
              {filter.categories.length > 0
                ? "선택한 카테고리의 맛집이 없습니다. 다른 카테고리를 선택해보세요."
                : "주변에 맛집이 없습니다. 반경을 넓혀보세요."}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

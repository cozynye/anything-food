'use client';

import type { FoodCategory } from '../../restaurant/types';
import { CATEGORY_ICONS } from '@/lib/constants';
import {
  panel,
  title,
  categoryGrid,
  categoryButton,
  categoryButtonActive,
  radiusControl,
  radiusLabel,
  radiusButtons,
  radiusButton,
  radiusButtonActive,
} from './FilterPanel.css';

interface FilterPanelProps {
  selectedCategories: FoodCategory[];
  selectedRadius: number;
  onCategoryToggle: (category: FoodCategory) => void;
  onRadiusChange: (radius: number) => void;
}

const categories: FoodCategory[] = ['한식', '양식', '중식', '일식', '술집'];
const radiusOptions = [
  { value: 500, label: '500m' },
  { value: 1000, label: '1km' },
  { value: 2000, label: '2km' },
];

export function FilterPanel({
  selectedCategories,
  selectedRadius,
  onCategoryToggle,
  onRadiusChange,
}: FilterPanelProps) {
  return (
    <div className={panel}>
      <h3 className={title}>음식 종류</h3>
      <div className={categoryGrid}>
        {categories.map((category) => {
          const isActive = selectedCategories.includes(category);
          return (
            <button
              key={category}
              className={`${categoryButton} ${isActive ? categoryButtonActive : ''}`}
              onClick={() => onCategoryToggle(category)}
            >
              <span>{CATEGORY_ICONS[category]}</span>
              <span>{category}</span>
            </button>
          );
        })}
      </div>

      <div className={radiusControl}>
        <label className={radiusLabel}>검색 반경</label>
        <div className={radiusButtons}>
          {radiusOptions.map(({ value, label }) => {
            const isActive = selectedRadius === value;
            return (
              <button
                key={value}
                className={`${radiusButton} ${isActive ? radiusButtonActive : ''}`}
                onClick={() => onRadiusChange(value)}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

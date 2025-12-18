import type { Restaurant } from '../types';
import { formatDistance } from '@/lib/utils';
import { CATEGORY_ICONS } from '@/lib/constants';
import { card, cardHeader, cardTitle, cardCategory, cardInfo, cardInfoItem } from './RestaurantCard.css';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick?: () => void;
}

export function RestaurantCard({ restaurant, onClick }: RestaurantCardProps) {
  const categoryIcon = CATEGORY_ICONS[restaurant.category] || CATEGORY_ICONS['기타'];

  return (
    <div className={card} onClick={onClick}>
      <div className={cardHeader}>
        <h3 className={cardTitle}>{restaurant.name}</h3>
        <span className={cardCategory}>
          {categoryIcon} {restaurant.category}
        </span>
      </div>

      <div className={cardInfo}>
        <div className={cardInfoItem}>
          📍 {restaurant.address}
        </div>
        {restaurant.phone && (
          <div className={cardInfoItem}>
            📞 {restaurant.phone}
          </div>
        )}
        {restaurant.distance !== undefined && (
          <div className={cardInfoItem}>
            🚶 {formatDistance(restaurant.distance)}
          </div>
        )}
      </div>
    </div>
  );
}

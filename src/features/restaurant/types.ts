export interface Restaurant {
  id: string;
  name: string;
  category: FoodCategory;
  address: string;
  roadAddress?: string;
  coordinates: Coordinates;
  phone?: string;
  distance?: number; // 사용자 위치로부터의 거리 (m)
  businessHours?: BusinessHours;
  isOpen?: boolean;
  rating?: number;
  reviewCount?: number;
  imageUrl?: string;
  priceRange?: PriceRange;
}

export type FoodCategory = '한식' | '양식' | '중식' | '일식' | '술집' | '기타';

export type PriceRange = 'low' | 'medium' | 'high'; // ~10,000원 | ~15,000원 | 15,000원+

export interface BusinessHours {
  lunchStart: string; // "11:30"
  lunchEnd: string;   // "14:00"
  dinnerStart?: string;
  dinnerEnd?: string;
  breakTime?: { start: string; end: string };
}

export interface Coordinates {
  lat: number;
  lng: number;
}

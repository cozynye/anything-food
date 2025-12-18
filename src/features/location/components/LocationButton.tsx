'use client';

import { Button } from '@/components/ui/button/Button';
import { locationButton } from './LocationButton.css';

interface LocationButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export function LocationButton({ onClick, isLoading }: LocationButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      className={locationButton}
    >
      {isLoading ? '위치 확인 중...' : '📍 현재 위치로 검색'}
    </Button>
  );
}

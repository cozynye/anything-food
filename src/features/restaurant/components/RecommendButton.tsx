'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button/Button';
import { recommendButton, recommendButtonAnimating } from './RecommendButton.css';

interface RecommendButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function RecommendButton({ onClick, disabled }: RecommendButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    onClick();
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <Button
      onClick={handleClick}
      disabled={disabled}
      variant="secondary"
      size="lg"
      className={`${recommendButton} ${isAnimating ? recommendButtonAnimating : ''}`}
    >
      🔄 다시 추천받기
    </Button>
  );
}

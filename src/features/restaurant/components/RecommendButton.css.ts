import { style, keyframes } from '@vanilla-extract/css';

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const recommendButton = style({
  minWidth: '180px',
});

export const recommendButtonAnimating = style({
  animation: `${rotate} 0.6s ease-in-out`,
});

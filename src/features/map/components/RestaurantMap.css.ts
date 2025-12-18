import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const mapContainer = style({
  width: '100%',
  height: '500px',
  borderRadius: vars.borderRadius.lg,
  overflow: 'hidden',
  boxShadow: vars.shadow.md,
  '@media': {
    'screen and (max-width: 768px)': {
      height: '400px',
    },
  },
});

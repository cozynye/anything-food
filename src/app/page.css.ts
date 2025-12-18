import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const container = style({
  minHeight: '100vh',
  backgroundColor: vars.color.background.secondary,
});

export const header = style({
  backgroundColor: vars.color.background.primary,
  borderBottom: `1px solid ${vars.color.gray[200]}`,
  padding: vars.space.lg,
  textAlign: 'center',
  boxShadow: vars.shadow.sm,
});

export const title = style({
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
  background: `linear-gradient(to right, ${vars.color.primary[500]}, ${vars.color.accent[500]})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  margin: 0,
});

export const main = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: vars.space.lg,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.lg,
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
});

export const sectionTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.primary,
  margin: 0,
});

export const controlsRow = style({
  display: 'flex',
  gap: vars.space.md,
  flexWrap: 'wrap',
});

export const restaurantGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: vars.space.md,
});

export const emptyState = style({
  textAlign: 'center',
  padding: vars.space['3xl'],
  color: vars.color.text.secondary,
  fontSize: vars.fontSize.lg,
  backgroundColor: vars.color.background.primary,
  borderRadius: vars.borderRadius.lg,
  border: `2px dashed ${vars.color.gray[300]}`,
});

export const loadingState = style({
  textAlign: 'center',
  padding: vars.space['2xl'],
  color: vars.color.text.secondary,
  fontSize: vars.fontSize.lg,
});

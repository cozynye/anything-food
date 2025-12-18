import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const panel = style({
  backgroundColor: vars.color.background.primary,
  borderRadius: vars.borderRadius.lg,
  padding: vars.space.lg,
  boxShadow: vars.shadow.sm,
  border: `1px solid ${vars.color.gray[200]}`,
});

export const title = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.primary,
  marginBottom: vars.space.md,
});

export const categoryGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
  gap: vars.space.sm,
  marginBottom: vars.space.lg,
});

export const categoryButton = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space.xs,
  padding: vars.space.md,
  backgroundColor: vars.color.background.secondary,
  border: `2px solid transparent`,
  borderRadius: vars.borderRadius.md,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  cursor: 'pointer',
  transition: vars.transition.fast,
  ':hover': {
    backgroundColor: vars.color.gray[100],
  },
});

export const categoryButtonActive = style({
  backgroundColor: vars.color.primary[50],
  borderColor: vars.color.primary[500],
  color: vars.color.primary[700],
});

export const radiusControl = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
});

export const radiusLabel = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.secondary,
});

export const radiusButtons = style({
  display: 'flex',
  gap: vars.space.sm,
});

export const radiusButton = style({
  flex: 1,
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.color.background.secondary,
  border: `2px solid transparent`,
  borderRadius: vars.borderRadius.md,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  cursor: 'pointer',
  transition: vars.transition.fast,
  ':hover': {
    backgroundColor: vars.color.gray[100],
  },
});

export const radiusButtonActive = style({
  backgroundColor: vars.color.secondary[50],
  borderColor: vars.color.secondary[500],
  color: vars.color.secondary[700],
});

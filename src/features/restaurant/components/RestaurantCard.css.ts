import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const card = style({
  backgroundColor: vars.color.background.primary,
  borderRadius: vars.borderRadius.lg,
  padding: vars.space.lg,
  boxShadow: vars.shadow.sm,
  border: `1px solid ${vars.color.gray[200]}`,
  cursor: 'pointer',
  transition: vars.transition.base,
  ':hover': {
    boxShadow: vars.shadow.md,
    transform: 'translateY(-2px)',
  },
});

export const cardHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.space.md,
});

export const cardTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.primary,
  margin: 0,
});

export const cardCategory = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.secondary,
  backgroundColor: vars.color.gray[100],
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.borderRadius.md,
});

export const cardInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
});

export const cardInfoItem = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.secondary,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
});

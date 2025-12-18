import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const searchContainer = style({
  position: 'relative',
  width: '100%',
  maxWidth: '500px',
});

export const searchInput = style({
  width: '100%',
  padding: `${vars.space.sm} ${vars.space.md}`,
  fontSize: vars.fontSize.base,
  border: `2px solid ${vars.color.gray[200]}`,
  borderRadius: vars.borderRadius.lg,
  outline: 'none',
  transition: 'border-color 0.2s',

  ':focus': {
    borderColor: vars.color.primary[500],
  },

  '::placeholder': {
    color: vars.color.text.secondary,
  },
});

export const searchResults = style({
  position: 'absolute',
  top: 'calc(100% + 4px)',
  left: 0,
  right: 0,
  backgroundColor: vars.color.background.primary,
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: vars.borderRadius.md,
  boxShadow: vars.shadow.md,
  maxHeight: '300px',
  overflowY: 'auto',
  zIndex: 10,
});

export const searchResultItem = style({
  padding: vars.space.md,
  cursor: 'pointer',
  borderBottom: `1px solid ${vars.color.gray[100]}`,
  transition: 'background-color 0.2s',

  ':hover': {
    backgroundColor: vars.color.gray[50],
  },

  ':last-child': {
    borderBottom: 'none',
  },
});

export const resultName = style({
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.primary,
  marginBottom: vars.space.xs,
});

export const resultAddress = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.secondary,
});

export const errorMessage = style({
  padding: vars.space.md,
  fontSize: vars.fontSize.sm,
  color: vars.color.error,
  textAlign: 'center',
});

export const loadingMessage = style({
  padding: vars.space.md,
  fontSize: vars.fontSize.sm,
  color: vars.color.text.secondary,
  textAlign: 'center',
});

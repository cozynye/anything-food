import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/app/theme.css';

export const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.borderRadius.md,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  transition: vars.transition.fast,
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  ':focus-visible': {
    outline: `2px solid ${vars.color.primary[500]}`,
    outlineOffset: '2px',
  },
});

export const buttonStyles = recipe({
  base: buttonBase,
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.color.primary[500],
        color: vars.color.text.inverse,
        ':hover': {
          backgroundColor: vars.color.primary[600],
        },
      },
      secondary: {
        backgroundColor: vars.color.secondary[500],
        color: vars.color.text.inverse,
        ':hover': {
          backgroundColor: vars.color.secondary[600],
        },
      },
      outline: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.gray[300]}`,
        color: vars.color.text.primary,
        ':hover': {
          backgroundColor: vars.color.gray[50],
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: vars.color.text.primary,
        ':hover': {
          backgroundColor: vars.color.gray[100],
        },
      },
    },
    size: {
      sm: {
        height: '32px',
        padding: `0 ${vars.space.sm}`,
        fontSize: vars.fontSize.xs,
      },
      md: {
        height: '40px',
        padding: `0 ${vars.space.md}`,
        fontSize: vars.fontSize.sm,
      },
      lg: {
        height: '48px',
        padding: `0 ${vars.space.lg}`,
        fontSize: vars.fontSize.base,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export type ButtonVariants = Parameters<typeof buttonStyles>[0];

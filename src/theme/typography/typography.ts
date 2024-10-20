import type { ThemeOptions } from '@mui/material/styles';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';
import { fontSizes } from '../tokens/font-sizes';
import { fontWeights } from '../tokens/font-weights';
import { fonts } from '../tokens/fonts';
import { lineHeights } from '../tokens';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    xg?: TypographyStyleOptions;
    xxxl?: TypographyStyleOptions;
    xxl?: TypographyStyleOptions;
  }

  interface TypographyVariantsOptions {
    xg?: TypographyStyleOptions;
    xxxl?: TypographyStyleOptions;
    xxl?: TypographyStyleOptions;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    xg?: true;
    xxxl?: true;
    xxl?: true;
  }
}

export const typography: ThemeOptions['typography'] = {
  fontFamily: fonts.lato,

  xg: {
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes['9xl'],
    lineHeight: lineHeights['leading-normal']
  },
  xxxl: {
    fontWeight: fontWeights.bold,
    fontSize: fontSizes['8xl'],
    lineHeight: lineHeights['leading-tight']
  },
  xxl: {
    fontWeight: fontWeights.bold,
    fontSize: fontSizes['7xl'],
    lineHeight: lineHeights['leading-tight']
  },
  h1: {
    fontWeight: fontWeights.bold,
    fontSize: fontSizes['6xl'],
    lineHeight: lineHeights['leading-6']
  },
  h2: {
    fontWeight: fontWeights.bold,
    fontSize: fontSizes['5xl'],
    lineHeight: lineHeights['leading-6']
  },
  h3: {
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['4xl'],
    lineHeight: lineHeights['leading-tight']
  },
  h4: {
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['3xl'],
    lineHeight: lineHeights['leading-tight']
  },
  h5: {
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes['2xl'],
    lineHeight: lineHeights['leading-normal']
  },
  h6: {
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights['leading-normal']
  },
  subtitle1: {
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.lg,
    lineHeight: lineHeights['leading-relaxed']
  },
  subtitle2: {
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes.md,
    lineHeight: lineHeights['leading-relaxed']
  },
  body1: {
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.md,
    lineHeight: lineHeights['leading-normal']
  },
  body2: {
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights['leading-normal']
  },
  caption: {
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights['leading-tight']
  }
};

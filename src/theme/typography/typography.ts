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
    xl?: TypographyStyleOptions;
    lg?: TypographyStyleOptions;
    md?: TypographyStyleOptions;
    sm?: TypographyStyleOptions;
    xs?: TypographyStyleOptions;
  }

  interface TypographyVariantsOptions {
    xg?: TypographyStyleOptions;
    xxxl?: TypographyStyleOptions;
    xxl?: TypographyStyleOptions;
    xl?: TypographyStyleOptions;
    lg?: TypographyStyleOptions;
    md?: TypographyStyleOptions;
    sm?: TypographyStyleOptions;
    xs?: TypographyStyleOptions;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    xg?: true;
    xxxl?: true;
    xxl?: true;
    xl?: true;
    lg?: true;
    md?: true;
    sm?: true;
    xs?: true;
  }
}

export const typography: ThemeOptions['typography'] = {
  fontSize: 10,
  htmlFontSize: 10,
  fontFamily: fonts.lato,

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
    fontSize: fontSizes['2xl'],
    lineHeight: lineHeights['leading-tight']
  },
  h4: {
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights['leading-tight']
  },
  h5: {
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes.lg,
    lineHeight: lineHeights['leading-normal']
  },
  h6: {
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes.md,
    lineHeight: lineHeights['leading-normal']
  },
  subtitle1: {
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.md,
    lineHeight: lineHeights['leading-relaxed']
  },
  subtitle2: {
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes.sm,
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
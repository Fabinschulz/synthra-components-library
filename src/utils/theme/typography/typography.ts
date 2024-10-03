import type { ThemeOptions } from '@mui/material/styles';
import { font } from './tokens';

export const typography: ThemeOptions['typography'] = {
  fontSize: 10,
  htmlFontSize: 10,
  fontFamily: '"Lato", sans-serif',

  h1: {
    fontWeight: font.weight.bold,
    fontSize: font.size.h1,
    lineHeight: font.lineHeight.h1
  },
  h2: {
    fontWeight: font.weight.bold,
    fontSize: font.size.h2,
    lineHeight: font.lineHeight.h2
  },
  h3: {
    fontWeight: font.weight.regular,
    fontSize: font.size.h3,
    lineHeight: font.lineHeight.h3
  },
  h4: {
    fontWeight: font.weight.regular,
    fontSize: font.size.h4,
    lineHeight: font.lineHeight.h4
  },
  h5: {
    fontWeight: font.weight.semibold,
    fontSize: font.size.h5,
    lineHeight: font.lineHeight.h5
  },
  h6: {
    fontWeight: font.weight.semibold,
    fontSize: font.size.h6,
    lineHeight: font.lineHeight.h6
  },
  subtitle1: {
    fontWeight: font.weight.regular,
    fontSize: font.size.subtitle1,
    lineHeight: font.lineHeight.subtitle1
  },
  subtitle2: {
    fontWeight: font.weight.semibold,
    fontSize: font.size.subtitle2,
    lineHeight: font.lineHeight.subtitle2
  },
  body1: {
    fontWeight: font.weight.regular,
    fontSize: font.size.body1,
    lineHeight: font.lineHeight.body1
  },
  body2: {
    fontWeight: font.weight.regular,
    fontSize: font.size.body2,
    lineHeight: font.lineHeight.body2
  },
  caption: {
    fontWeight: font.weight.regular,
    fontSize: font.size.caption,
    lineHeight: font.lineHeight.caption
  }
};

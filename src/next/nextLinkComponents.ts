import type { Components, Theme } from '@mui/material/styles';
import NextLink from 'next/link';

export const nextLinkComponents: Components<Theme> = {
  MuiLink: {
    defaultProps: {
      component: NextLink
    }
  },
  MuiButtonBase: {
    defaultProps: {
      LinkComponent: NextLink
    }
  }
};

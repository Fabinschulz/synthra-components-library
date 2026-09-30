import type { Components, Theme } from '@mui/material/styles';

export const MuiButton: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: {
      textTransform: 'none'
    },
    sizeSmall: ({ theme }) => ({
      padding: '8px',
      ...theme.typography.caption,
      '& svg': {
        fontSize: '14px!important'
      }
    }),
    sizeMedium: ({ theme }) => ({
      padding: '8px 16px',
      ...theme.typography.subtitle2,
      '& svg': {
        fontSize: '16px!important'
      }
    }),
    sizeLarge: ({ theme }) => ({
      ...theme.typography.subtitle1,
      padding: '12px 16px',
      '& svg': {
        fontSize: '18px!important'
      }
    })
  }
};

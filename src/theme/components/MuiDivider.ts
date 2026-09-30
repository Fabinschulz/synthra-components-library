import type { Components, Theme } from '@mui/material/styles';

export const MuiDivider: Components<Theme>['MuiDivider'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderColor: theme.palette.primary.main,
      borderBottomWidth: '2px'
    }),
    vertical: {
      borderBottomWidth: '0',
      borderRightWidth: '2px'
    }
  }
};

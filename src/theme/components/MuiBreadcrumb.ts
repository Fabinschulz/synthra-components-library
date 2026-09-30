import type { Components, Theme } from '@mui/material/styles';

export const MuiBreadcrumbs: Components<Theme>['MuiBreadcrumbs'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.caption
    })
  }
};

import type { Components, Theme } from '@mui/material/styles';

export const MuiAlert: Components<Theme>['MuiAlert'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.caption,
      alignItems: 'center',
      padding: '4px 16px',
      '.MuiAlert-message': {
        padding: '0'
      },
      '&.MuiAlert-filled.MuiAlert-colorInfo': {
        backgroundColor: theme.palette.info.light,
        color: theme.palette.info.dark,
        '& .MuiAlert-icon, & .MuiAlert-action': {
          color: theme.palette.info.dark
        }
      }
    })
  }
};

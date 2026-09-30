
import type { Components, Theme } from '@mui/material/styles';



export const MuiSwitch: Components<Theme>['MuiSwitch'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      width: 52,
      height: 32,
      padding: 0,
      '& .MuiButtonBase-root-MuiSwitch-switchBase:hover': {
        height: 16,
        width: 16
      },
      '& .MuiSwitch-switchBase': {
        padding: 0,
        transitionDuration: '300ms',
        marginTop: '8px',
        marginLeft: '8px',
        '&.Mui-checked': {
          transform: 'translateX(20px)',
          color: theme.palette.primary.main,
          background: theme.palette.common.white,
          marginTop: '4px',
          marginLeft: '4px',
          '&:hover': {
            color: theme.palette.primary.main,
            background: theme.palette.common.white
          },
          '& .MuiSvgIcon-root': {
            padding: '6px',
            color: theme.palette.primary.main,
            background: theme.palette.common.white,
            borderRadius: '50%',
            marginTop: '0',
            marginLeft: '0'
          },
          '& + .MuiSwitch-track': {
            backgroundColor: theme.palette.primary.main,
            opacity: 1,
            border: 0
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            color: theme.palette.common.white,
            width: 24,
            height: 24,
            marginTop: '0',
            marginLeft: '0'
          }
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
          color: theme.palette.neutral.medium
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.7
        },
        '& .MuiSvgIcon-root': {
          padding: '6px',
          color: theme.palette.common.white,
          backgroundColor: theme.palette.neutral.medium,
          borderRadius: '50%',
          fontSize: '24px',
          marginTop: '-4px',
          marginLeft: '-4px'
        }
      },
      '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 16,
        height: 16,
        color: theme.palette.neutral.medium,
        boxShadow: 'none'
      },
      '& .MuiSwitch-track': {
        borderRadius: 32 / 2,
        backgroundColor: theme.palette.common.white,
        border: `2px solid ${theme.palette.neutral.medium}`,
        opacity: 1
      },
      '& .MuiSvgIcon': {
        backgroundColor: theme.palette.common.white,
        borderRadius: '50%',
        color: theme.palette.primary.main,
        position: 'absolute',
        zIndex: 999,
        top: '50%',
        transform: 'translateY(-50%)'
      }
    })
  }
};

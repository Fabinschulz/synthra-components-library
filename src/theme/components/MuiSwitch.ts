import type { Palette } from '@mui/material/styles';
import { Components } from '@mui/material';

import { palette as paletteOptions } from '../palette/light';

const palette = paletteOptions! as Palette;

export const MuiSwitch: Components['MuiSwitch'] = {
  styleOverrides: {
    root: {
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
          color: palette.primary.main,
          background: palette.common.white,
          marginTop: '4px',
          marginLeft: '4px',
          '&:hover': {
            color: palette.primary.main,
            background: palette.common.white
          },
          '& .MuiSvgIcon-root': {
            padding: '6px',
            color: palette.primary.main,
            background: palette.common.white,
            borderRadius: '50%',
            marginTop: '0',
            marginLeft: '0'
          },
          '& + .MuiSwitch-track': {
            backgroundColor: palette.primary.main,
            opacity: 1,
            border: 0
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            color: palette.common.white,
            width: 24,
            height: 24,
            marginTop: '0',
            marginLeft: '0'
          }
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
          color: palette.neutral.medium
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.7
        },
        '& .MuiSvgIcon-root': {
          padding: '6px',
          color: palette.common.white,
          backgroundColor: palette.neutral.medium,
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
        color: palette.neutral.medium,
        boxShadow: 'none'
      },
      '& .MuiSwitch-track': {
        borderRadius: 32 / 2,
        backgroundColor: palette.common.white,
        border: `2px solid ${palette.neutral.medium}`,
        opacity: 1
      },
      '& .MuiSvgIcon': {
        backgroundColor: palette.common.white,
        borderRadius: '50%',
        color: palette.primary.main,
        position: 'absolute',
        zIndex: 999,
        top: '50%',
        transform: 'translateY(-50%)'
      }
    }
  }
};

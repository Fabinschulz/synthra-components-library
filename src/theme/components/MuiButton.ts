import { Components } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';
import { typography as typographyOptions } from '../typography';

const typography = typographyOptions! as Typography;

export const MuiButton: Components['MuiButton'] = {
  styleOverrides: {
    root: {
      textTransform: 'none'
    },
    sizeSmall: {
      padding: '8px',
      ...typography.caption,
      '& svg': {
        fontSize: '14px!important'
      }
    },
    sizeMedium: {
      padding: '8px 16px',
      ...typography?.subtitle2,
      '& svg': {
        fontSize: '16px!important'
      }
    },
    sizeLarge: {
      ...typography?.subtitle1,
      padding: '12px 16px',
      '& svg': {
        fontSize: '18px!important'
      }
    }
  }
};

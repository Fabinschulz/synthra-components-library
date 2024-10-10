import { Components } from '@mui/material';
import { Palette } from '@mui/material/styles';
import { Typography } from '@mui/material/styles/createTypography';
import { palette as paletteOptions } from '../palette/light';
import { typography as typographyOptions } from '../typography';

const palette = paletteOptions! as Palette;
const typography = typographyOptions! as Typography;

export const MuiAlert: Components['MuiAlert'] = {
  styleOverrides: {
    root: {
      ...typography.caption,
      alignItems: 'center',
      padding: '4px 16px',
      '.MuiAlert-message': {
        padding: '0'
      }
    },
    filledInfo: {
      backgroundColor: palette.info.light
    }
  }
};

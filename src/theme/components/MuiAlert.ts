import { Components } from '@mui/material';
import { Palette } from '@mui/material/styles';
import { TypographyVariants as Typography } from '@mui/material/styles';
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
      },
      variants: [
        {
          props: { variant: 'filled', severity: 'info' },
          style: {
            backgroundColor: palette.info.light
          }
        }
      ]
    }
  }
};

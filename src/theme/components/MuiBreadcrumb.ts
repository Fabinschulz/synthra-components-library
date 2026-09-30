import { Components } from '@mui/material';
import { TypographyVariants as Typography } from '@mui/material/styles';
import { typography as typographyOptions } from '../typography';

const typography = typographyOptions! as Typography;

export const MuiBreadcrumbs: Components['MuiBreadcrumbs'] = {
  styleOverrides: {
    root: {
      ...typography.caption
    }
  }
};

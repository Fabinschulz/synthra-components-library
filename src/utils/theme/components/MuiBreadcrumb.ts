import { Components } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';
import { typography as typographyOptions } from '../typography';

const typography = typographyOptions! as Typography;

export const MuiBreadcrumbs: Components['MuiBreadcrumbs'] = {
    styleOverrides: {
        root: {
            ...typography.xs,
        },
    }
}
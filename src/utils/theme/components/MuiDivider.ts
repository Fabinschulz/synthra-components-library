import { Components } from '@mui/material';
import { Palette } from '@mui/material/styles';
import { palette as paletteOptions } from '../palette/light';

const palette = paletteOptions! as Palette;

export const MuiDivider: Components['MuiDivider'] = {
    styleOverrides: {
        root: {
            borderColor: palette.primary.main,
            borderBottomWidth: '2px',
        },
        vertical: {
            borderBottomWidth: '0',
            borderRightWidth: '2px'
        },
    }
}
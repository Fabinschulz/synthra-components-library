import type {} from '@mui/material/styles';
import type {} from '@mui/material/Typography';
import type {} from '@mui/x-data-grid/themeAugmentation';
import type {} from '@mui/x-data-grid-pro/themeAugmentation';
import type {} from '@mui/lab/themeAugmentation';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: TypeNeutral;
    brand: TypeBrand;
    custom: {
      background: {
        dark: string;
      };
    };
  }

  export interface PaletteOptions {
    neutral?: Partial<TypeNeutral>;
    brand?: Partial<TypeBrand>;
    custom?: {
      background?: {
        dark?: string;
      };
    };
  }

  interface TypeNeutral {
    lightest: string;
    light: string;
    medium: string;
    dark: string;
    darkest: string;
    primaryShade: {
      '10': string;
      '15': string;
      '20': string;
      '30': string;
      '45': string;
      '87': string;
    };
  }

  interface TypeBrand {
    lightest: string;
    light: string;
    medium: string;
    dark: string;
    darkest: string;
  }

  interface SimplePaletteColorOptions {
    shade?: Partial<PaletteColorShades>;
  }

  interface PaletteColor {
    shade?: Partial<PaletteColorShades>;
  }

  interface PaletteColorShades {
    '10': string;
  }
}

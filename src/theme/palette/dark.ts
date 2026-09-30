import type { ThemeOptions } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

export const palette: ThemeOptions['palette'] = {
  mode: 'dark',

  primary: {
    light: '#6A95F0',
    main: '#3D7BF2',
    dark: '#0762ED',
    contrastText: '#FFFFFF'
  },

  secondary: {
    light: '#6AB7FF',
    main: '#3399FF',
    dark: '#005BB5',
    contrastText: '#FFFFFF'
  },

  brand: {
    lightest: '#E0F2FF',
    light: '#3968D0',
    medium: '#0762ED',
    dark: '#005BB5',
    darkest: '#192B66'
  },

  neutral: {
    lightest: '#111B33',
    light: '#3A4560',
    medium: '#A7ADBF',
    dark: '#E0E3EB',
    darkest: '#FFFFFF',

    primaryShade: {
      '10': alpha('#FFFFFF', 0.1),
      '15': alpha('#A7ADBF', 0.1),
      '20': alpha('#A7ADBF', 0.2),
      '30': alpha('#A7ADBF', 0.3),
      '45': alpha('#FFFFFF', 0.45),
      '87': alpha('#E0E3EB', 0.87)
    }
  },

  divider: alpha('#FFFFFF', 0.12),

  error: {
    light: '#F88078',
    main: '#F44336',
    dark: '#C62828',
    contrastText: '#FFFFFF'
  },

  warning: {
    light: '#FFB547',
    main: '#FF9800',
    dark: '#C77700',
    contrastText: '#FFFFFF'
  },

  success: {
    light: '#7BC67E',
    main: '#4CAF50',
    dark: '#1B5E20',
    contrastText: '#FFFFFF'
  },

  info: {
    light: '#0B2F4A',
    main: '#0288D1',
    dark: '#7CC4F5',
    contrastText: '#FFFFFF'
  },

  common: {
    black: '#000000',
    white: '#FFFFFF'
  },

  background: {
    default: '#0B1224',
    paper: '#111B33'
  },

  custom: {
    background: {
      dark: '#060B18'
    }
  }
};

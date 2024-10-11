import type { ThemeOptions } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

export const palette: ThemeOptions['palette'] = {
  mode: 'dark',

  primary: {
    light: '#3968D0',
    main: '#0762ED',
    dark: '#192B66',
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
    lightest: '#E0E0E0',
    light: '#BABFD0',
    medium: '#666666',
    dark: '#373737',
    darkest: '#000000'
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
    light: '#E0F2FF',
    main: '#0288D1',
    dark: '#005BB5',
    contrastText: '#FFFFFF'
  },

  common: {
    black: '#000000',
    white: '#FFFFFF'
  }
};

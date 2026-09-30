import type { ThemeOptions } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

export const palette: ThemeOptions['palette'] = {
  mode: 'light',

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

  neutral: {
    lightest: '#FFFFFF',
    light: '#BABFD0',
    medium: '#666666',
    dark: '#373737',
    darkest: '#000000',

    primaryShade: {
      '10': alpha('#373737', 0.1),
      '15': alpha('#BABFD0', 0.1),
      '20': alpha('#BABFD0', 0.2),
      '30': alpha('#BABFD0', 0.3),
      '45': alpha('#373737', 0.45),
      '87': alpha('#666666', 0.87)
    }
  },

  brand: {
    lightest: '#E0F2FF',
    light: '#3968D0',
    medium: '#0762ED',
    dark: '#005BB5',
    darkest: '#192B66'
  },

  divider: alpha('#000000', 0.12),

  error: {
    light: '#F88078',
    main: '#F44336',
    dark: '#C62828',
    contrastText: '#FFFFFF'
  },

  warning: {
    light: '#FFB547',
    main: '#FF9800',
    dark: '#ED6C02',
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
    dark: '#126897',
    contrastText: '#FFFFFF'
  },

  common: {
    black: '#000000',
    white: '#FFFFFF'
  },

  action: {
    hover: 'rgba(7, 98, 237, 0.04)',
    selected: 'rgba(7, 98, 237, 0.08)',
    disabledBackground: 'rgba(7, 98, 237, 0.12)',
    focus: 'rgba(7, 98, 237, 0.12)',
    disabled: 'rgba(7, 98, 237, 0.38)',
    active: 'rgba(7, 98, 237, 0.56)'
  },

  background: {
    default: '#FFFFFF',
    paper: '#FFFFFF'
  },

  custom: {
    background: {
      dark: '#0E1A39'
    }
  }
};

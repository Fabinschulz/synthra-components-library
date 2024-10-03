'use client';
import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { palette } from './palette/dark';

export const dark = createTheme({
  palette,
  typography
});

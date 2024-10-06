'use client';
import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { palette } from './palette/dark';
import { components } from './components';
import { ptBR } from '@mui/material/locale';
import { ptBR as Datagrid_ptBR } from '@mui/x-data-grid/locales';

export const dark = createTheme(
  {
    palette,
    typography,
    components
  },
  Datagrid_ptBR,
  ptBR
);

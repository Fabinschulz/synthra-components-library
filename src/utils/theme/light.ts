'use client';
import { createTheme } from '@mui/material/styles';
import { ptBR } from '@mui/material/locale';
import { ptBR as Datagrid_ptBR } from '@mui/x-data-grid/locales';
import { typography } from './typography';
import { palette } from './palette/light';
import { components } from './components';

export const light = createTheme(
  {
    palette,
    typography,
    components
  },
  Datagrid_ptBR,
  ptBR
);

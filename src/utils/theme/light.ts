'use client';
import { createTheme } from '@mui/material/styles';
import { ptBR } from '@mui/material/locale';
import { ptBR as Datagrid_ptBR } from '@mui/x-data-grid/locales';
import { typography } from './typography';
import { palette } from './palette/light';

export const light = createTheme(
  {
    palette,
    typography
  },
  Datagrid_ptBR,
  ptBR
);

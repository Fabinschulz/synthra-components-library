export type { SynthraPalette } from './palette/augmentation';
import { ptBR } from '@mui/material/locale';
import type { Theme, ThemeOptions } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { ptBR as dataGridPtBR } from '@mui/x-data-grid/locales';
import { components } from './components';
import { palette as darkPalette } from './palette/dark';
import { palette as lightPalette } from './palette/light';
import { typography } from './typography';

export type ThemeMode = 'light' | 'dark';

export interface ThemeCreationOptions {
  /**
   * Modo de cor do tema.
   * @default 'light'
   */
  mode?: ThemeMode;

  /**
   * Locales do MUI aplicados ao tema (textos internos de Pagination, DataGrid, Autocomplete...).
   * Passe `[]` para usar os textos padrão (inglês).
   * @default [ptBR (DataGrid), ptBR (Material)]
   */
  locales?: object[];

  /**
   * Opções mescladas por último, para ajustar paleta, tipografia ou componentes por projeto
   * (white-label) sem alterar os componentes da biblioteca.
   */
  overrides?: ThemeOptions;
}

export function initializeTheme({
  mode = 'light',
  locales = [dataGridPtBR, ptBR],
  overrides = {}
}: ThemeCreationOptions = {}): Theme {
  return createTheme(
    {
      palette: mode === 'dark' ? darkPalette : lightPalette,
      typography,
      components
    },
    ...locales,
    overrides
  );
}

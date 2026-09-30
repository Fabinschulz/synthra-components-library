'use client';
import { CssBaseline } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import type { ReactNode } from 'react';
import { light } from './light';

export interface ProviderProps {
  /**
   * Tema aplicado. Use `initializeTheme` para gerar variações (modo escuro, white-label).
   * @default light
   */
  theme?: Theme | ((outerTheme: Theme) => Theme);

  /**
   * Injeta o `CssBaseline` do MUI (reset global de estilos). Desative quando a aplicação já
   * tiver o próprio reset.
   * @default true
   */
  cssBaseline?: boolean;
  children?: ReactNode;
}

export const Provider = ({ theme = light, cssBaseline = true, children }: ProviderProps) => (
  <ThemeProvider theme={theme}>
    {cssBaseline && <CssBaseline />}
    {children}
  </ThemeProvider>
);

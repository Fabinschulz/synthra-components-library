import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ThemeProvider, Theme } from '@emotion/react';
import { light } from './light';

export interface ThemeContextProps {
  theme?: Partial<Theme> | ((outerTheme: Theme) => Theme);
  children: React.ReactNode;
}

export const ThemeContext = ({ theme = light, children }: ThemeContextProps) => (
  <ThemeProvider theme={theme}>
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  </ThemeProvider>
);

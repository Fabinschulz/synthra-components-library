'use client';
import { light } from '@/utils/theme';
import { createTheme } from '@mui/material';

let {
  spacing,
  shadows,
  components,
  typography,
  breakpoints,
  direction,
  shape,
  transitions,
  zIndex,
  mixins,
  unstable_sxConfig,
  unstable_strictMode
} = light;

/**
 * Cria e retorna o tema ativo da aplicação utilizando o Material UI.
 *
 * Este tema é construído a partir de várias configurações, como espaçamento, sombras, tipografia,
 * breakpoints e estilos de componentes personalizados. Além disso, aplica estilizações específicas
 * para dispositivos móveis, garantindo responsividade.
 *
 * O tema é baseado na configuração `light` existente, porém pode ser ajustado para modos de tema
 * distintos (e.g., light, dark).
 *
 * @returns {Theme} O tema ativo configurado para ser utilizado na aplicação.
 */
const activeTheme = () =>
  createTheme({
    spacing,
    mixins,
    unstable_strictMode,
    unstable_sxConfig,
    shape,
    shadows,
    typography,
    breakpoints,
    transitions,
    zIndex,
    direction,
    components: {
      ...components
    },
    palette: { ...light.palette }
  });

export default activeTheme;

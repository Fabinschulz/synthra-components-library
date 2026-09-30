import { TabProps } from '@mui/material';

export interface TabItemProps extends TabProps {
  /**
   * Determina o Label da tab
   * @default ''
   * @type {string}
   * @example <TabItem label="Tab 1" />
   */
  label?: string;

  /**
   * Determina o componente a ser renderizado na tab
   */
  component?: React.ElementType;

  /**
   * Link de navegação. Renderizado com o `LinkComponent` do tema
   * (ex.: `next/link` via `@synthra.io/ui-kit/next`).
   * @example <TabItem href="/tab1" />
   */
  href?: string;
}

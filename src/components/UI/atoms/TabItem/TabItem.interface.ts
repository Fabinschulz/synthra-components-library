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
   * Determina o link da tab
   * @default ''
   * @type {string}
   * @example <TabItem to="/tab1" />
   */
  to?: string;
}

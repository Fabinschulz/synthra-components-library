import { ReactNode } from 'react';

export interface TabBarProps {
  /**
   * Determina os items de tabs
   * @default []
   * @example [{ label: 'Tab 1', href: '/tab1' }, { label: 'Tab 2', href: '/tab2' }]
   * @type TabsProps[]
   *  @required true
   */
  tabs: TabsProps[];

  /**
   * Determina as variações da barra
   * @default 'standard'
   * @example 'fullWidth'
   * @type 'fullWidth' | 'scrollable' | 'standard'
   * @see https://mui.com/pt/api/tabs/
   */
  variant?: 'fullWidth' | 'scrollable' | 'standard';

  /**
   * Determina se conterá scroll
   * @default 'auto'
   * @example 'auto'
   * @type 'auto' | false | true
   * @see https://mui.com/pt/api/tabs/
   */
  scrollButtons?: 'auto' | false | true;

  /**
   * Determina a orientação da barra
   * @default 'horizontal'
   * @example 'vertical'
   * @type 'horizontal' | 'vertical'
   * @see https://mui.com/pt/api/tabs/
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Determina os childrens da tab
   * @type ReactNode
   * @required true
   */
  children: ReactNode;
}

export interface TabsProps {
  /**
   * Determina o label do item
   * @example 'Tab 1'
   * @type string
   * @required false
   * @default ''
   */
  label?: string;

  /**
   * Determina o href do item
   * @example '/tab1'
   * @type string
   * @required false
   * @default ''
   */
  href?: string;
}

export interface TabPanelProps {
  children?: ReactNode;
  index?: number;
  value?: number;
}

import { ReactNode } from 'react';

/**
 * Interface para o componente TabBar
 * @param tabs - tabs do componente
 * @param variant - variant do componente
 * @param scrollButtons - scrollButtons do componente
 * @param orientation - orientation do componente
 * @param children - children do componente
 * @example <TabBar tabs={[{ label: 'Tab 1', href: '/tab1' }, { label: 'Tab 2', href: '/tab2' }]} variant='standard' scrollButtons='auto' orientation='horizontal'>Children</TabBar>
 * @returns JSX.Element
 */

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

/**
 * Interface para o componente Tabs
 * @param label - label do componente
 * @param href - href do componente
 * @example <Tabs label='Tab 1' href='/tab1' />
 * @returns JSX.Element
 */
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

/**
 * Interface para o componente TabPanel
 * @param children - children do componente
 * @param index - index do componente
 * @param value - value do componente
 * @example <TabPanel index={0} value={0}>Children</TabPanel>
 * @returns JSX.Element
 */

export interface TabPanelProps {
  children?: ReactNode;
  index?: number;
  value?: number;
}

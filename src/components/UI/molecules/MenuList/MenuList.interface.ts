import { MenuListProps as MuiMenuListProps } from '@mui/material';

export interface MenuListProps extends MuiMenuListProps {
  /**
   * Determina os itens do menu
   * @default []
   * @type {MenuItems[]}
   * @example <MenuList items={items} />
   * @example <MenuList items={items} size="small" />
   * @example <MenuList items={items} size="medium" />
   */
  items?: MenuItems[];

  /**
   * Determina o tamanho do menuItem
   * @default 'medium'
   * @type {'small' | 'medium'}
   * @example <MenuList size="small" />
   * @example <MenuList size="medium" />
   */
  size?: 'small' | 'medium';
}

/**
 * Interface para os itens do menu
 * @interface MenuItems
 * @property {string} title - Determina o texto exibido
 * @property {() => void} onClick - Determina o evento de click do menuItem
 * @property {boolean} selected - Determina se a opção esta selecionada
 * @example <MenuList items={items} />
 * @example <MenuList items={items} size="small" />
 * @example <MenuList items={items} size="medium" />
 */

export interface MenuItems {
  /**
   * Determina o texto exibido
   * @default ''
   * @type {string}
   */
  title?: string;

  /**
   * Determina o evento de click do menuItem
   * @default () => {}
   * @type {() => void}
   * @example <MenuItem onClick={() => console.log('click')} />
   */
  onClick?: () => void;

  /**
   * Determina se a opção esta selecionada
   * @default false
   * @type {boolean}
   * @example <MenuItem selected />
   */
  selected?: boolean;
}

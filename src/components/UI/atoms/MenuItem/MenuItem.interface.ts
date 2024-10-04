import { MenuItemProps as MuiMenuItemProps } from '@mui/material';

export interface MenuItemProps extends MuiMenuItemProps {
  /**
   * Determina o tamanho do menuItem
   * @default 'medium'
   * @type {'small' | 'medium'}
   * @example <MenuItem size="small" />
   */
  size?: 'small' | 'medium';
}

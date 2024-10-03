import { MenuItemProps as MuiMenuItemProps } from '@mui/material';

export interface MenuItemProps extends MuiMenuItemProps {
  /**
   * Determina o tamanho do menuItem
   */
  size?: 'small' | 'medium';
}

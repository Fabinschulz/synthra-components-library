import type { FunctionComponent } from 'react';
import type { MenuListProps } from './MenuList.interface';

import { MenuList as MuiMenuList } from '@mui/material';
import { Paper } from './MenuList.styled';
import { MenuItem } from '../../atoms';

export const MenuList: FunctionComponent<MenuListProps> = ({ items, size }) => {
  return (
    <Paper>
      <MuiMenuList>
        {items?.map((item, index) => (
          <MenuItem key={index} onClick={item.onClick} selected={item.selected} size={size}>
            {item.title}
          </MenuItem>
        ))}
      </MuiMenuList>
    </Paper>
  );
};

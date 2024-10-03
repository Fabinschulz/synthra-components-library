'use client';
import type { MenuItemProps } from './MenuItem.interface';
import React, { FunctionComponent } from 'react';
import { StyledMenuItem } from './MenuItem.styled';

export const MenuItemMUI: FunctionComponent<MenuItemProps> = (props, ref) => {
  const { children, size, className, ...rest } = props;

  const combinedClassName = `${size ? size : ''} ${className ? className : ''}`.trim();

  return (
    <StyledMenuItem ref={ref} {...rest} className={combinedClassName}>
      {children}
    </StyledMenuItem>
  );
};

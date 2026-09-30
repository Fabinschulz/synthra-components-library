'use client';
import type { MenuItemProps } from './MenuItem.interface';
import React from 'react';
import clsx from 'clsx';

import { StyledMenuItem } from './MenuItem.styled';

const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>((props, ref) => {
  const { children, size, className, ...menuItemProps } = props;
  return (
    <StyledMenuItem ref={ref} {...menuItemProps} className={clsx(size, className)}>
      {children}
    </StyledMenuItem>
  );
});

export default MenuItem;

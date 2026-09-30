'use client';
import { Stack } from '@mui/material';
import { FunctionComponent } from 'react';
import { StyledLink } from './Menu.styled';
import clsx from 'clsx';
import { ISubmenuOptions } from './Menu.interface';

export const SubMenu: FunctionComponent<{ link: ISubmenuOptions & { subSubmenu?: ISubmenuOptions[] } }> = ({
  link
}) => (
  <li className={clsx(link.active && 'active')}>
    <StyledLink href={link.href} aria-current={link.active ? 'page' : undefined}>
      {link.title}
    </StyledLink>
    {link.subSubmenu && link.subSubmenu.length > 0 && (
      <Stack component="ul" sx={{ pl: 2 }}>
        {link.subSubmenu.map((subItem) => (
          <li key={subItem.href ?? subItem.title}>
            <StyledLink href={subItem.href}>{subItem.title}</StyledLink>
          </li>
        ))}
      </Stack>
    )}
  </li>
);

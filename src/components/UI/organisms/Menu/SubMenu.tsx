import { Stack } from '@mui/material';
import { FunctionComponent } from 'react';
import { StyledLink } from './Menu.styled';
import clsx from 'clsx';
import { MenuAccordionItems } from './Menu.interface';

export const SubMenu: FunctionComponent<{ link: MenuAccordionItems }> = ({ link }) => (
  <li className={clsx(link.active && 'active')}>
    <StyledLink href={link.href}>{link.title}</StyledLink>
    {link.subSubmenu && link.subSubmenu.length > 0 && (
      <Stack>
        {link.subSubmenu.map((subItem) => (
          <li key={subItem.title}>
            <StyledLink href={subItem.href}>{subItem.title}</StyledLink>
          </li>
        ))}
      </Stack>
    )}
  </li>
);

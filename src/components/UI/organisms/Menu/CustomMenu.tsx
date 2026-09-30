'use client';
import type { MenuItems } from './Menu.interface';
import { useId } from 'react';
import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText,
  StyledStack
} from './Menu.styled';
import { AccordionSummary, Stack } from '@mui/material';
import { DownIcon } from '../../icons';
import clsx from 'clsx';
import { SubMenu } from './SubMenu';

type CustomMenuProps = {
  itemsList: MenuItems[];
  activeIndex: number;
  open: boolean;
  setActiveIndex: (index: number) => void;
  setOpen: (open: boolean) => void;
};

export const CustomMenu = ({
  itemsList,
  activeIndex,
  open,
  setActiveIndex,
  setOpen
}: CustomMenuProps) => {
  const baseId = useId();

  return (
    <StyledList>
      {itemsList?.map((item, index) => {
        const isActive = !!item.active;
        const isHighlighted = open && isActive;
        const key = item.href ?? item.title ?? index;

        if (item.submenu) {
          const headerId = `${baseId}-menu-${index}-header`;
          const panelId = `${baseId}-menu-${index}-panel`;

          return (
            <StyledListItem
              key={key}
              disablePadding
              className={clsx(isActive && 'active')}
              openMenu={open}
            >
              <StyledAccordion
                expanded={activeIndex === index}
                onChange={() => {
                  setActiveIndex(activeIndex === index ? -1 : index);
                  if (!open) setOpen(true);
                }}
                slotProps={{ region: { id: panelId, 'aria-labelledby': headerId } }}
              >
                <AccordionSummary
                  expandIcon={<DownIcon />}
                  aria-controls={panelId}
                  id={headerId}
                  aria-label={open ? undefined : item.title}
                  sx={{
                    '& .MuiAccordionSummary-expandIconWrapper': {
                      display: open ? 'block' : 'none'
                    }
                  }}
                >
                  <StyledListItemButton
                    component="div"
                    tabIndex={-1}
                    disableRipple
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      marginBottom: '.60rem',
                      width: '100%'
                    }}
                  >
                    <StyledListItemIcon sx={{ mr: open ? 2 : 0 }}>{item.icon}</StyledListItemIcon>

                    <StyledListItemText
                      primary={item.title}
                      sx={{ display: open ? 'block' : 'none' }}
                      className="title"
                    />
                  </StyledListItemButton>
                </AccordionSummary>

                <StyledAccordionDetails sx={{ display: open ? 'block' : 'none' }}>
                  <StyledStack component="ul">
                    {item.submenu.map((link) => {
                      if (!!link?.subSubmenu && link?.subSubmenu?.length > 0) {
                        return (
                          <li
                            key={link.href ?? link.title}
                            className={clsx(link.active && 'active')}
                            style={{ listStyle: 'none' }}
                          >
                            <StyledLink
                              href={link.href}
                              aria-current={link.active ? 'page' : undefined}
                              sx={{
                                fontStyle: 'italic',
                                display: 'block',
                                marginLeft: '-16px',
                                marginBottom: '1px'
                              }}
                            >
                              {link.title}
                            </StyledLink>
                            <Stack
                              component="ul"
                              sx={{ display: 'block', marginLeft: '10px', padding: '10px 0 3px 0' }}
                            >
                              {link.subSubmenu.map((subItem) => (
                                <SubMenu link={subItem} key={subItem.href ?? subItem.title} />
                              ))}
                            </Stack>
                          </li>
                        );
                      }

                      return (
                        <li key={link.href ?? link.title} className={clsx(link.active && 'active')}>
                          <StyledLink
                            href={link.href}
                            className={clsx(link.active && 'active')}
                            aria-current={link.active ? 'page' : undefined}
                          >
                            {link.title}
                          </StyledLink>
                        </li>
                      );
                    })}
                  </StyledStack>
                </StyledAccordionDetails>
              </StyledAccordion>
            </StyledListItem>
          );
        }

        return (
          <StyledListItem
            key={key}
            disablePadding
            className={clsx(isActive && 'active')}
            openMenu={open}
          >
            <StyledListItemButton
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              aria-label={open ? undefined : item.title}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                marginBottom: '.60rem',
                backgroundColor: isHighlighted ? 'primary.main' : 'transparent'
              }}
            >
              <StyledListItemIcon sx={{ mr: open ? 2 : 0 }}>{item.icon}</StyledListItemIcon>

              <StyledListItemText
                primary={item.title}
                sx={{ display: open ? 'block' : 'none' }}
                className="title"
              />
            </StyledListItemButton>
          </StyledListItem>
        );
      })}
    </StyledList>
  );
};

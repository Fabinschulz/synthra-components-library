import type { MenuItems } from './Menu.interface';
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
import Link from 'next/link';
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
  return (
    <StyledList>
      {itemsList?.map((item, index) => {
        if (item.submenu) {
          return (
            <StyledAccordion expanded={activeIndex === index} key={index}>
              <StyledListItem
                onClick={() => (open ? null : setOpen(true))}
                key={item.title}
                disablePadding
                className={clsx(item.active && 'active')}
              >
                <AccordionSummary
                  expandIcon={<DownIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    '& .MuiAccordionSummary-expandIconWrapper': {
                      display: open ? 'block' : 'none'
                    }
                  }}
                >
                  <StyledListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      marginBottom: '2px'
                    }}
                    onClick={() => {
                      if (activeIndex === index) {
                        setActiveIndex(-1);
                      } else {
                        setActiveIndex(index);
                      }
                      if (!open) setOpen(true);
                    }}
                  >
                    <StyledListItemIcon
                      sx={{
                        mr: open ? 2 : 0
                      }}
                    >
                      {item.icon}
                    </StyledListItemIcon>

                    <StyledListItemText
                      primary={item.title}
                      sx={{ display: open ? 'block' : 'none' }}
                      className="title"
                    />
                  </StyledListItemButton>
                </AccordionSummary>
              </StyledListItem>

              <StyledAccordionDetails sx={{ display: open ? 'block' : 'none' }}>
                <StyledStack>
                  {item.submenu.map((link) => {
                    if (!!link?.subSubmenu && link?.subSubmenu?.length > 0) {
                      return (
                        <li
                          key={link.title}
                          className={clsx(link.active && 'active')}
                          style={{ listStyle: 'none' }}
                        >
                          <StyledLink
                            href={link.href}
                            style={{
                              textDecoration: 'none',
                              fontStyle: 'italic',
                              color: '#666666',
                              display: 'block',
                              marginLeft: -16,
                              marginBottom: 1
                            }}
                          >
                            {link.title}
                          </StyledLink>
                          <Stack
                            sx={{ display: 'block', marginLeft: '10px', padding: '10px 0 3px 0' }}
                          >
                            {!!link?.subSubmenu &&
                              link?.subSubmenu?.length > 0 &&
                              link?.subSubmenu.map((i) => {
                                return <SubMenu link={i} key={i.title} />;
                              })}
                          </Stack>
                        </li>
                      );
                    }

                    return (
                      <li key={link.title} className={clsx(link.active && 'active')}>
                        <StyledLink
                          href={link.href}
                          style={{ textDecoration: 'none' }}
                          className={clsx(link.active && 'active')}
                        >
                          {link.title}
                        </StyledLink>
                      </li>
                    );
                  })}
                </StyledStack>
              </StyledAccordionDetails>
            </StyledAccordion>
          );
        }

        return (
          <>
            <Link href={item.href} style={{ textDecoration: 'none' }}>
              <StyledListItem
                key={item.title}
                disablePadding
                className={clsx(item.active && 'active')}
              >
                <StyledListItemButton
                  onClick={() => (open ? null : setOpen(true))}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    marginBottom: '2px'
                  }}
                >
                  <StyledListItemIcon
                    sx={{
                      mr: open ? 2 : 0
                    }}
                  >
                    {item.icon}
                  </StyledListItemIcon>

                  <StyledListItemText
                    primary={item.title}
                    sx={{ display: open ? 'block' : 'none' }}
                    className="title"
                  />
                </StyledListItemButton>
              </StyledListItem>
            </Link>
          </>
        );
      })}
    </StyledList>
  );
};

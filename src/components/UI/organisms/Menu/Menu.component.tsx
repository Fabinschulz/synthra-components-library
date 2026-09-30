'use client';
import type { FunctionComponent } from 'react';
import type { MenuLabels, MenuProps } from './Menu.interface';
import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import { IconButton, Skeleton, Stack, styled, Typography } from '@mui/material';
import {
  Drawer,
  LogoBox,
  StyledDivider,
  StyledListItem,
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText
} from './Menu.styled';
import { useOnClickOutside } from '@/utils';
import { CustomMenu } from './CustomMenu';
import { LeftIcon, RightIcon, SignInIcon } from '../../icons';
import { Avatar } from '../../atoms';

const defaultLabels: Required<MenuLabels> = {
  menu: 'Menu',
  account: 'Conta',
  logout: 'Sair',
  expand: 'Expandir menu',
  collapse: 'Recolher menu'
};

type TitleMenuProps = {
  title: string;
  open: boolean;
};

const TitleMenu = ({ title, open }: TitleMenuProps) => {
  return (
    <Typography
      variant="body2"
      sx={{
        color: 'neutral.medium',
        fontWeight: 500,
        fontSize: '0.85rem',
        my: 2,
        textAlign: open ? 'left' : 'center'
      }}
    >
      {title}
    </Typography>
  );
};

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  padding: 0,
  color: theme.palette.neutral.medium,
  '&:hover': {
    backgroundColor: 'transparent'
  },
  '&:active': {
    backgroundColor: 'transparent'
  }
}));

const iconSx = {
  width: '20px',
  height: '20px'
};

const Menu: FunctionComponent<MenuProps> = ({
  items,
  logoIcon,
  drawerWidthMain,
  onClickLogout,
  closeDelay = 200,
  activateAutoOutsideMenu = false,
  skeleton = false,
  avatarTitle,
  avatarSubtitle,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  labels: labelsProp
}) => {
  const labels = { ...defaultLabels, ...labelsProp };
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : uncontrolledOpen;

  const setOpen = (next: boolean) => {
    if (!isControlled) setUncontrolledOpen(next);
    onOpenChange?.(next);
  };

  const wrapperRef = useRef(null);

  useOnClickOutside(
    wrapperRef,
    () => {
      if (!activateAutoOutsideMenu || !open) return;
      setOpen(false);
    },
    closeDelay
  );

  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    drawerWidthMain?.(open ? 270 : 105);
  }, [drawerWidthMain, open]);

  return (
    <Box ref={wrapperRef} sx={{ display: 'flex', position: 'relative' }}>
      <Drawer variant="permanent" open={open}>
        <LogoBox>
          {logoIcon}
          <CustomIconButton
            size="small"
            onClick={() => setOpen(!open)}
            aria-label={open ? labels.collapse : labels.expand}
            aria-expanded={open}
          >
            {open ? <LeftIcon sx={iconSx} /> : <RightIcon sx={iconSx} />}
          </CustomIconButton>
        </LogoBox>

        <StyledDivider />

        <TitleMenu title={labels.menu} open={open} />

        {!skeleton ? (
          <CustomMenu
            activeIndex={activeIndex}
            itemsList={items ?? []}
            open={open}
            setActiveIndex={setActiveIndex}
            setOpen={setOpen}
          />
        ) : (
          <>
            {[1, 2, 3, 4, 5, 6, 7].map((_, index) => {
              return (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  animation="pulse"
                  width="85%"
                  height={50}
                  sx={{
                    borderRadius: '5px',
                    margin: '10px 5px'
                  }}
                />
              );
            })}
          </>
        )}
        <StyledDivider />
        <TitleMenu title={labels.account} open={open} />

        <StyledListItem disablePadding openMenu={open}>
          {onClickLogout && (
            <StyledListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
              onClick={onClickLogout}
              aria-label={open ? undefined : labels.logout}
            >
              <StyledListItemIcon
                sx={{
                  mr: open ? 2 : 0
                }}
              >
                <SignInIcon />
              </StyledListItemIcon>
              <StyledListItemText
                primary={labels.logout}
                sx={{ display: open ? 'block' : 'none' }}
                className="title"
              />
            </StyledListItemButton>
          )}
          {avatarTitle && (
            <Stack sx={{ alignItems: open ? 'flex-start' : 'center', mt: 2 }}>
              <Avatar title={avatarTitle} subtitle={avatarSubtitle} showText={open} />
            </Stack>
          )}
        </StyledListItem>
      </Drawer>
    </Box>
  );
};

export default Menu;

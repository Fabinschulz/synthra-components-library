import type { FunctionComponent } from 'react';
import type { MenuProps } from './Menu.interface';
import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import { IconButton, Skeleton, Stack, Typography } from '@mui/material';
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
import { Avatar as AvatarMenu } from '../../atoms';

type TitleMenuProps = {
  title: string;
  open: boolean;
};

const TitleMenu = ({ title, open }: TitleMenuProps) => {
  return (
    <Typography
      variant="body2"
      sx={{
        color: '#666666',
        fontWeight: 500,
        fontSize: '0.85rem',
        mt: 2,
        textAlign: open ? 'left' : 'center'
      }}
    >
      {title}
    </Typography>
  );
};

export const Menu: FunctionComponent<MenuProps> = ({
  items,
  logoIcon,
  drawerWidthMain,
  onClickLogout,
  closeDelay = 200,
  activateAutoOutsideMenu = false,
  isLoading = false
}) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useOnClickOutside(
    wrapperRef,
    () => {
      if (activateAutoOutsideMenu === false || !activateAutoOutsideMenu) return;
      setOpen(false);
    },
    closeDelay
  );

  const [activeIndex, setActiveIndex] = useState(-1);

  const handleDrawerOpen = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    drawerWidthMain?.(open ? 290 : 98);
  }, [drawerWidthMain, open]);

  const iconSx = {
    width: '20px',
    height: '20px'
  };

  return (
    <Box ref={wrapperRef} sx={{ display: 'flex', position: 'relative' }}>
      <Drawer variant="permanent" open={open}>
        <LogoBox>
          {logoIcon}
          <IconButton
            size="small"
            onClick={handleDrawerOpen}
            sx={{
              position: 'absolute',
              right: '-15px'
            }}
          >
            {open ? (
              <LeftIcon htmlColor="#666666" sx={iconSx} />
            ) : (
              <RightIcon htmlColor="#666666" sx={iconSx} />
            )}
          </IconButton>
        </LogoBox>

        <StyledDivider />

        <TitleMenu title="Menu" open={open} />

        {!isLoading ? (
          <CustomMenu
            {...{
              activeIndex: activeIndex!,
              itemsList: items!,
              open: open!,
              setActiveIndex,
              setOpen
            }}
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
        <TitleMenu title="Conta" open={open} />

        <StyledListItem disablePadding>
          {onClickLogout && (
            <StyledListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
              onClick={onClickLogout}
            >
              <StyledListItemIcon
                sx={{
                  mr: open ? 2 : 0
                }}
              >
                <SignInIcon htmlColor="#666666" />
              </StyledListItemIcon>
              <StyledListItemText
                primary="Sair"
                sx={{ display: open ? 'block' : 'none' }}
                className="title"
              />
            </StyledListItemButton>
          )}
          <Stack alignItems={open ? 'flex-start' : 'center'} sx={{ mt: 2 }}>
            <AvatarMenu title="Usuário" subtitle="Administrador" showText={open} />
          </Stack>
        </StyledListItem>
      </Drawer>
    </Box>
  );
};

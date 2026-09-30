import type { FunctionComponent } from 'react';
import type { DrawerProps } from './Drawer.interface';

import { Stack, Drawer as MuiDrawer } from '@mui/material';
import { CloseButton, DrawerContent, DrawerHeader } from './Drawer.styled';
import { Typography } from '../../atoms';
import { CloseIcon } from '../../icons';

const Drawer: FunctionComponent<DrawerProps> = ({
  title,
  description,
  children,
  open,
  onClose,
  anchor,
  toggleDrawer
}) => {
  return (
    <MuiDrawer
      open={open}
      onClose={onClose}
      anchor={anchor}
      slotProps={{
        paper: {
          sx: {
            width: toggleDrawer ? 500 : 612,
            maxWidth: '100%'
          }
        }
      }}
    >
      <DrawerContent>
        <DrawerHeader>
          <Stack>
            <Typography
              variant="h1"
              sx={{
                color: 'neutral.dark',
                lineHeight: '2rem',
                fontSize: '1.5rem',
                mb: 1,
                fontWeight: 700
              }}
            >
              {title}
            </Typography>
            {description && (
              <Typography
                variant="h2"
                sx={{
                  fontSize: '1rem',
                  color: 'neutral.medium',
                  lineHeight: '1.5rem',
                  fontWeight: 400,
                  mb: 3
                }}
              >
                {description}
              </Typography>
            )}
          </Stack>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </DrawerHeader>
        {children}
      </DrawerContent>
    </MuiDrawer>
  );
};

export default Drawer;

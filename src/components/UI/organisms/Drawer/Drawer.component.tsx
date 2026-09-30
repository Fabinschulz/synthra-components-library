'use client';
import type { FunctionComponent } from 'react';
import type { DrawerProps } from './Drawer.interface';
import { useId } from 'react';
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
  toggleDrawer,
  closeLabel = 'Fechar'
}) => {
  const titleId = useId();
  const descriptionId = useId();

  return (
    <MuiDrawer
      open={open}
      onClose={onClose}
      anchor={anchor}
      slotProps={{
        paper: {
          'aria-labelledby': title ? titleId : undefined,
          'aria-describedby': description ? descriptionId : undefined,
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
            {title && (
              <Typography
                id={titleId}
                component="h2"
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
            )}
            {description && (
              <Typography
                id={descriptionId}
                component="p"
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
          {onClose && (
            <CloseButton onClick={onClose} aria-label={closeLabel}>
              <CloseIcon />
            </CloseButton>
          )}
        </DrawerHeader>
        {children}
      </DrawerContent>
    </MuiDrawer>
  );
};

export default Drawer;

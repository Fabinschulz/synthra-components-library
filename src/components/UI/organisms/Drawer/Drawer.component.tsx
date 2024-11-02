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
      PaperProps={{
        sx: {
          width: toggleDrawer ? 500 : 612,
          maxWidth: '100%'
        }
      }}
    >
      <DrawerContent>
        <DrawerHeader>
          <Stack>
            <Typography
              variant="xxl"
              color="neutral.dark"
              lineHeight="34px"
              mb={1}
              fontWeight={700}
            >
              {title}
            </Typography>
            {description && (
              <Typography variant="caption" color="neutral.medium" lineHeight="19px" mb={3}>
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

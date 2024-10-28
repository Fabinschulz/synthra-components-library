import { styled } from '@mui/material/styles';
import { Drawer as IconButton, Stack } from '@mui/material';

export const DrawerContent = styled(Stack)(() => ({
  padding: '32px 24px'
}));

export const DrawerHeader = styled(Stack)(() => ({
  marginBottom: '24px'
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  marginRight: '-8px',
  '& svg': {
    fontSize: '24px',
    color: theme.palette.neutral.dark
  }
}));

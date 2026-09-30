'use client';
import { styled } from '@mui/material/styles';
import { IconButton, Stack } from '@mui/material';

export const DrawerContent = styled(Stack)(() => ({
  padding: '32px 24px'
}));

export const DrawerHeader = styled(Stack)(() => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '16px'
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  marginRight: '-8px',
  marginTop: '-8px',
  '& svg': {
    fontSize: '24px',
    color: theme.palette.neutral.dark
  }
}));

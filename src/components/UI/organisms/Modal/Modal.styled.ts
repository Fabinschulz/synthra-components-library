'use client';
import { styled } from '@mui/material/styles';
import { DialogTitle, IconButton, DialogContent, Dialog, Box } from '@mui/material';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '8px',
    border: `1px solid ${theme.palette.divider}`
  }
}));

export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  ...theme.typography.h3,
  padding: 0,
  marginBottom: '8px'
}));

export const StyledIconButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: '8px',
  right: '8px',
  padding: '7px',
  '& svg': {
    fontSize: '15px'
  }
}));

export const StyledDialogContent = styled(DialogContent)(() => ({
  padding: '40px 40px 32px 40px'
}));

export const BoxIcon = styled(Box)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  '&.small': {
    marginRight: '24px',
    padding: '14px',
    '& svg': {
      fontSize: '28px',
      color: theme.palette.neutral.medium
    }
  },
  '&.large': {
    marginBottom: '28px',
    '& svg': {
      fontSize: '40px',
      color: theme.palette.neutral.medium
    }
  }
}));

'use client';
import { styled } from '@mui/material/styles';
import { MenuItem as MuiMenuItem } from '@mui/material';

export const StyledMenuItem = styled(MuiMenuItem)(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.neutral.medium,
  lineHeight: '19px',
  maxWidth: '100%',
  '&:hover': {
    color: theme.palette.primary.main,
    background: theme.palette.action.hover
  },
  '&.Mui-selected': {
    background: theme.palette.neutral.primaryShade?.['20']
  },
  '&.small': {
    padding: '6px 16px'
  },
  '&.medium': {
    padding: '14px 16px'
  }
}));

'use client';
import { Link, styled } from '@mui/material';

export const StyledLink = styled(Link)(({ theme }) => ({
  fontSize: theme.typography.body1!.fontSize ?? '1rem',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline'
  }
}));

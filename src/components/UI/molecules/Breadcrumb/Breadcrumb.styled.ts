
import { styled } from '@mui/material';
import Link from 'next/link';

export const StyledLink = styled(Link)(({ theme, color }) => ({
  fontSize: theme.typography.body1!.fontSize ?? '1rem',
  textDecoration: 'none',
  color,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

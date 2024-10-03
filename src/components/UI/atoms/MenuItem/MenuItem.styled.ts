import { styled } from '@mui/material/styles';
import { MenuItem as MuiMenuItem } from '@mui/material';

export const StyledMenuItem = styled(MuiMenuItem)(({ theme }) => ({
  fontSize: '14px',
  color: '#666666',
  lineHeight: '19px',
  maxWidth: '100%',
  '&:hover': {
    color: '#FF0000',
    background: '#ffe5e5'
  },
  '&.Mui-selected': {
    color: '#FF0000',
    background: '#ffe5e5'
  },
  '&.small': {
    padding: '6px 16px'
  },
  '&.medium': {
    padding: '14px 16px'
  }
}));

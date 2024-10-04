import { styled } from '@mui/material/styles';
import { Tab as MuiTab } from '@mui/material';

export const Tab = styled(MuiTab)(({ theme }) => ({
  padding: '14px 64px',
  ...theme.typography.body1,
  textTransform: 'inherit',
  background: theme.palette.grey['100'],
  '&:after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderTop: '2px solid transparent',
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  '&:hover:not(.Mui-selected):after': {
    borderColor: theme.palette.neutral.medium
  },
  '&.Mui-selected': {
    color: theme.palette.primary.main,
    background: theme.palette.neutral.lightest,
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  '&:first-of-type': {
    '&, &:after': {
      borderTopLeftRadius: '8px'
    }
  },
  '&:last-of-type': {
    '&, &:after': {
      borderTopRightRadius: '8px'
    }
  }
}));

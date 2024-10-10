import { styled } from '@mui/material/styles';
import { Tabs as MuiTabs } from '@mui/material';

export const Tabs = styled(MuiTabs)(({ theme }) => ({
  '& .MuiTabs-scroller': {
    borderRadius: '8px 8px 0 0'
  },
  '& .MuiTabs-indicator': {
    bottom: 'auto',
    top: 0,
    borderTop: `2px solid ${theme.palette.primary.main}`,
    height: '100%',
    pointerEvents: 'none',
    backgroundColor: 'transparent',
    '[data-first="true"]&': {
      borderTopLeftRadius: '8px'
    },
    '[data-last="true"]&': {
      borderTopRightRadius: '8px'
    }
  },
  [theme.breakpoints.up('sm')]: {
    '& .MuiTabScrollButton-root': {
      display: 'none'
    }
  }
}));

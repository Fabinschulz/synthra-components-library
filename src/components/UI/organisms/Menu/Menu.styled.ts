'use client';
import {
  Accordion,
  AccordionDetails,
  Box,
  Divider,
  Drawer as MuiDrawer,
  ListItem,
  ListItemButton,
  ListItemText,
  Link,
  Stack,
  List
} from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import { alpha, styled } from '@mui/material/styles';

export const StyledListItemIcon = styled(ListItemIcon)(() => ({
  minWidth: 0,
  justifyContent: 'center'
}));

type ListItemProps = {
  openMenu: boolean;
};

export const StyledListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'openMenu'
})<ListItemProps>(({ theme, openMenu }) => ({
  display: 'block',
  '& svg': {
    color: theme.palette?.neutral?.medium
  },
  '&.active': {
    '.MuiTouchRipple-root': {
      background: theme.palette.action.hover
    },
    '& svg': {
      color: openMenu ? theme.palette?.common?.white : theme.palette.primary.main,
      '& path': {
        stroke: openMenu ? theme.palette?.common?.white : theme.palette.primary.main
      }
    },
    '& .title > .MuiTypography-root': {
      color: theme.palette?.common?.white,
      fontWeight: 700
    }
  },
  '&:hover': {
    '.MuiTouchRipple-root': {
      background: theme.palette.action.hover
    },
    '& svg': {
      color: theme.palette.primary.main,
      '& path': {
        stroke: theme.palette.primary.main
      }
    },
    '& .title > .MuiTypography-root': {
      color: theme.palette.primary.main,
      fontWeight: 700
    }
  }
}));

export const StyledListItemButton = styled(ListItemButton)(() => ({
  padding: '10px',
  borderRadius: '10px',
  position: 'relative',
  '& > div > svg': {
    width: '22px',
    height: '24px'
  }
})) as unknown as typeof ListItemButton;

export const StyledListItemText = styled(ListItemText)(({ theme, color }) => ({
  '& .MuiTypography-root': {
    ...theme.typography.body1,
    color: color ?? theme.palette?.neutral?.medium,
    lineHeight: '19px',
    minWidth: '159px'
  }
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette?.neutral?.light,
  borderRadius: '4px',
  marginTop: '15px'
}));

export const LogoBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '15px',
  '& svg': {
    width: '60px',
    height: '32px'
  }
}));

export const StyledAccordion = styled(Accordion)(() => ({
  border: 'none',
  boxShadow: 'none',
  '& .MuiAccordionSummary-root': {
    padding: 0
  },
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  },
  '& .MuiAccordionSummary-content': {
    margin: 0
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    position: 'absolute',
    right: '12px'
  },
  '& .MuiAccordionSummary-content.Mui-expanded, &:not(:last-of-type)': {
    margin: 0
  },
  '& .Mui-expanded': {
    minHeight: '10px!important'
  }
}));

export const StyledAccordionDetails = styled(AccordionDetails)(() => ({
  padding: '0 0 12px 60px',
  maxWidth: '100%'
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette?.neutral?.medium,
  lineHeight: '19px',
  '&.active': {
    color: theme.palette?.primary?.main
  },
  '&:hover': {
    color: theme.palette?.primary?.main
  },
  textDecoration: 'none'
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
  marginTop: '8px',
  paddingLeft: 0,
  listStyle: 'none',
  '& li': {
    listStyle: 'outside',
    marginBottom: '16px',
    marginLeft: '0px',
    '&.active': {
      '&::marker': {
        color: theme.palette.primary.main
      }
    },
    '&:last-of-type': {
      marginBottom: 0
    }
  }
})) as unknown as typeof Stack;

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: 'auto',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    minHeight: '650px',
    '& .MuiDrawer-paper': {
      borderRadius: '0 10px 10px 0',
      border: `0.5px solid ${alpha(theme.palette.neutral.light, 0.5)}`,
      padding: '35px 11px',
      width: open ? 240 : 90,
      transition: 'width 0.1s ease-in-out',
      overflowX: 'hidden'
    }
  })
);

export const StyledList = styled(List)(({ theme }) => ({
  overflow: 'auto',
  overflowX: 'hidden',
  padding: '0 10px',
  '&::-webkit-scrollbar': {
    width: '0.4em'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.action.disabledBackground
  },
  flexGrow: 1
}));

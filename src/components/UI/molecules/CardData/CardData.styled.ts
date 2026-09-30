'use client';
import { styled } from '@mui/material/styles';
import { Box, Stack } from '@mui/material';

export const Card = styled(Stack)(({ theme }) => ({
  background: theme.palette.background.paper,
  border: `0.5px solid ${theme.palette.neutral.light}`,
  borderRadius: '8px',
  padding: '24px',
  maxWidth: '100%',
  marginBottom: '32px',
  alignItems: 'center'
}));

export const ListItem = styled(Stack)(({ theme }) => ({
  borderBottom: `2px solid ${theme.palette.neutral.primaryShade?.['30']}`,
  borderRadius: '2px',
  padding: '16px 0',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  whiteSpace: 'pre-wrap',
  overflow: 'auto',
  textAlign: 'right',
  textOverflow: 'ellipsis',
  '&::-webkit-scrollbar': {
    width: '0.4em',
    height: '0.4em'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.action.disabledBackground,
    outline: `1px solid ${theme.palette.neutral.light}`,
    borderRadius: '4px'
  },
  '&:first-of-type': {
    paddingTop: 0
  },
  '&:last-of-type': {
    borderBottom: 'none',
    paddingBottom: 0
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
}));

export const TooltipIcon = styled(Box)(({ theme, color }: any) => {
  const backgroundColor =
    color !== 'medium' ? theme.palette[color]?.main : theme.palette.neutral.medium;
  return {
    display: 'inline-block',
    width: 12,
    height: 12,
    backgroundColor,
    marginRight: 8,
    borderRadius: '4px'
  };
});

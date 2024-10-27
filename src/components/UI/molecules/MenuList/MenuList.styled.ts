import { styled } from '@mui/material/styles';
import { Paper as MuiPaper } from '@mui/material';

export const Paper = styled(MuiPaper)(() => ({
  padding: '8px 0',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
  borderRadius: '4px',
  maxWidth: '250px'
}));

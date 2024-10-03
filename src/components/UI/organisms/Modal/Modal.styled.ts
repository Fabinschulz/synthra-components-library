import { styled } from '@mui/material/styles';
import { DialogTitle, IconButton, DialogContent, Dialog, Box } from '@mui/material';

export const StyledDialog = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    borderRadius: '8px',
    border: '1px solid #DEE2E6'
  }
}));

export const StyledDialogTitle = styled(DialogTitle)(() => ({
  padding: '8px 8px 0 8px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-start'
}));

export const StyledIconButton = styled(IconButton)(() => ({
  padding: '7px',
  '& svg': {
    fontSize: '15px'
  }
}));

export const StyledDialogContent = styled(DialogContent)(() => ({
  padding: '0 40px 32px 40px'
}));

export const BoxIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
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

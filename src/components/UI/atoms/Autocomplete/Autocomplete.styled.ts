'use client';
import { alpha, styled } from '@mui/material/styles';
import { Autocomplete } from '@mui/material';

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  '& .MuiFormLabel-root': {
    color: theme.palette.neutral.medium
  },
  '& .MuiChip-label': {
    fontSize: theme.typography.caption!.fontSize ?? '1rem',
    color: theme.palette.primary.main
  },
  '& .MuiChip-root': {
    backgroundColor: alpha(theme.palette.primary.main, 0.12),
    color: theme.palette.primary.main,
    '& .MuiChip-deleteIcon': {
      color: theme.palette.primary.main,

      '&:hover': {
        color: theme.palette.primary.main
      }
    }
  },
  '& .MuiOutlinedInput-root': {
    paddingTop: '0px',
    paddingBottom: '0px'
  }
}));

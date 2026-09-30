'use client';
import { TextField as MuiTextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    ...theme.typography.body1,
    padding: '14px',
    height: '56px',
    boxSizing: 'border-box',
    color: theme.palette.neutral.dark,
    '&::placeholder': {
      ...theme.typography.body2,
      color: theme.palette.neutral.dark,
      opacity: 1
    }
  },
  '& .Mui-disabled': {
    color: `${theme.palette.text.disabled} !important`,
    '& .MuiSvgIcon-root': {
      color: `${theme.palette.text.disabled} !important`
    }
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
    fontSize: '25px'
  },
  '& .MuiFormLabel-root': {
    ...theme.typography.body1
  },
  '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
    borderWidth: '2px',
    borderColor: theme.palette.error.dark
  },
  '& .MuiFormHelperText-root': {
    ...theme.typography.body1,
    '&:not(.Mui-error)': {
      color: theme.palette.primary.main
    }
  },
  '& legend': {
    ...theme.typography.caption
  },
  '& .MuiFormLabel-asterisk': {
    color: theme.palette.primary.main
  }
}));

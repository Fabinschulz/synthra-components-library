import { styled } from '@mui/material/styles';
import { FormControl as MuiFormControl } from '@mui/material';

export const FormControl = styled(MuiFormControl)(({ theme }) => ({
  '& .MuiInputBase-input': {
    ...theme.typography.body2,
    padding: '8px',
    height: '35px!important',
    boxSizing: 'border-box',
    color: theme.palette.neutral.light,
    background: theme.palette.neutral.primaryShade?.['15'],
    borderRadius: '4px',
    border: 'none',
    '&::placeholder': {
      ...theme.typography.body2,
      color: theme.palette.neutral.dark,
      opacity: 1,
    }
  },
  '& fieldset': {
    border: 'none'
  },
  '& svg': {
    color: theme.palette.neutral.light,
  },
  '& #simple-select': {
    display: 'flex',
    alignItems: 'center',
    border: 'none'
  }
}))
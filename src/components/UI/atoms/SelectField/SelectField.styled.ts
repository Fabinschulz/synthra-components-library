import { styled } from '@mui/material/styles';
import { FormControl as MuiFormControl } from '@mui/material';
import { MenuItem } from '../MenuItem';

export const FormControl = styled(MuiFormControl)(({ theme }) => ({
  '& .MuiInputBase-input': {
    ...theme.typography.body1,
    padding: '14px',
    height: '56px !important',
    boxSizing: 'border-box',
    color: theme.palette.neutral.dark,
    '&::placeholder': {
      ...theme.typography.body2,
      color: theme.palette.neutral.medium,
      opacity: 1
    }
  },
  '& .MuiFormLabel-root': {
    ...theme.typography.body1,
    color: theme.palette.neutral.medium,
    '&.MuiInputLabel-shrink.Mui-focused': {
      color: theme.palette.primary.main
    },
    '&.Mui-error': {
      color: theme.palette.error.main
    }
  },
  '& legend': {
    ...theme.typography.body2
  },
  '& .MuiSelect-icon': {
    fontSize: '24px',
    '&.MuiSelect-iconOpen': {
      color: theme.palette.primary.main
    }
  },
  '& .MuiFormLabel-asterisk': {
    paddingRight: '7px',
    '&:hover, &:active, &:focus, &.Mui-focused': {
      color: theme.palette.primary.main,
      background: theme.palette.common.white
    }
  },
  '& .MuiSelect-select': {
    display: 'flex',
    alignItems: 'center',
    '&.MuiFilledInput-input:not(.MuiSelect-multiple)': {
      paddingTop: '22px',
      paddingLeft: '12px'
    }
  },
  '& .MuiFilledInput-root': {
    '&:before': {
      borderBottomColor: theme.palette.primary.main
    },
    '&, & .MuiFilledInput-input': {
      background: theme.palette.common.white,
      padding: '5px',
      borderRadius: '4px 4px 0 0',
      '&:hover, &:active, &:focus, &.Mui-focused': {
        background: theme.palette.common.white,
        borderRadius: '4px 4px 0 0',
      }
    }
  }
}));

export const SelectMenuItem = styled(MenuItem)(({ theme }) => ({
  '& .MuiFormControlLabel-label, & .MuiCheckbox-root': {
    color: 'inherit'
  },
  '&.Mui-selected, &.Mui-focusVisible': {
    color: theme.palette.brand.darkest,
    backgroundColor: theme.palette.primary.shade?.['10']
  }
}));

import { styled } from '@mui/material/styles';
import { FormControl, Select } from '@mui/material';

const colorBlue = '#89CFF0';
export const StyledFormControl = styled(FormControl)(({ theme }) => {
  const color = '#666666';

  return {
    '& .MuiInputBase-input': {
      fontSize: '14px',
      padding: '14px',
      height: '56px !important',
      boxSizing: 'border-box',
      color: '#373737',
      '&::placeholder': {
        fontSize: '16px',
        color: '#CCCCCC',
        opacity: 1
      }
    },
    '& .MuiFormLabel-root': {
      fontSize: '16px',
      color,
      '&.MuiInputLabel-shrink.Mui-focused': {
        color: colorBlue
      },
      '&.Mui-error': {
        color: theme.palette.error.main
      }
    },
    '& .MuiFormLabel-asterisk': {
      color: colorBlue,
      background: theme.palette.common.white,
      paddingRight: '7px'
    },
    '& .MuiSelect-select': {
      display: 'flex',
      alignItems: 'center'
    }
  };
});

export const StyledSelect = styled(Select)(() => ({
  '&.MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#E11D48'
    }
  }
}));

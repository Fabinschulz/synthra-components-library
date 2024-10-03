import { TextField as MuiTextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTextField = styled(MuiTextField)(({ theme, error }) => ({
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
    color: 'rgba(0, 0, 0, 0.38) !important',
    '& .MuiSvgIcon-root': {
      color: 'rgba(0, 0, 0, 0.38) !important'
    }
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
    fontSize: '25px'
  },
  '& .MuiFormLabel-root': {
    ...theme.typography.body1
  },
  '& MuiInputBase-root-MuiOutlinedInput-root.Mui-error ': {
    border: `2px solid ${theme.palette.error.dark}`
  },
  '& .MuiFormHelperText-root': {
    ...theme.typography.body1,
    color: theme.palette.primary.main
  },
  '& legend': {
    ...theme.typography.caption
  },
  '& .MuiFormLabel-asterisk': {
    color: theme.palette.primary.main
  }
}));

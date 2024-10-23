import { alpha, styled } from '@mui/material/styles';
import { Checkbox, FormControlLabel } from '@mui/material';

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    ...theme.typography.body2,
    lineHeight: 1.2,
    color: theme.palette.neutral.darkest,
    '&.Mui-disabled': {
      color: theme.palette.neutral.light
    }
  }
}));

export const StyledCheckbox = styled(Checkbox)(({ theme, size }) => ({
  padding: size === 'small' ? '6.675px' : '8px',
  margin: size === 'small' ? '3px' : undefined,
  color: theme.palette.neutral.dark,
  '& .MuiSvgIcon-root': {
    borderRadius: '6px',
    fontSize: '24px',
    '&.MuiSvgIcon-fontSizeSmall': {
      fontSize: '18.67px'
    }
  },
  '&.Mui-disabled': {
    color: theme.palette.neutral.light
  },
  '&:not(.Mui-disabled)': {
    '&.Mui-checked, &.MuiCheckbox-indeterminate': {
      '&.MuiCheckbox-colorPrimary': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: alpha(theme.palette.secondary.dark, 0.08)
        }
      },
      '&.MuiCheckbox-colorSecondary': {
        color: theme.palette.error.light,
        '&:hover': {
          backgroundColor: alpha(theme.palette.error.light, 0.08)
        }
      }
    }
  }
}));

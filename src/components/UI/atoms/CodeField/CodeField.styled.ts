import { styled } from '@mui/material/styles';
import { FormControl as MuiFormControl } from '@mui/material';

export const FormControl = styled(MuiFormControl)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  '& .MuiInputBase-input': {
    fontSize: `${theme.typography?.body1?.fontSize}!important`,
    lineHeight: '29px',
    padding: '18px',
    width: '60px',
    height: '60px!important',
    color: theme.palette.neutral.darkest,
    textAlign: 'center',
    border: '1px solid #373737',
    borderRadius: '8px'
  },
  '& .MuiTextField-root': {
    '&:nth-of-type(3)': {
      marginRight: '32px'
    }
  },
  '& fieldset': {
    border: 'none'
  },
  [theme.breakpoints.down('sm')]: {
    '& .MuiInputBase-input': {
      width: '40px!important',
      height: '40px!important',
      padding: '10px!important',
      fontSize: `${theme.typography?.body2?.fontSize}!important`,
      marginRight: '4px'
    },
    '& .MuiTextField-root': {
      '&:nth-of-type(3)': {
        marginRight: 0
      },
      '&:last-of-type': {
        marginRight: 0
      }
    }
  }
}));

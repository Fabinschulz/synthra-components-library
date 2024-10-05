import { styled } from '@mui/material/styles';
import { Autocomplete } from '@mui/material';

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  '& .MuiAutocomplete-inputRoot': {
    paddingY: '0px'
  }
}));

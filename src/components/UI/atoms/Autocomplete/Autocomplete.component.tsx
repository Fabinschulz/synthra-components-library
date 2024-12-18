'use client';
import { FunctionComponent } from 'react';
import {
  CircularProgress,
  IconButton,
  InputAdornment,
  SxProps,
  TextFieldVariants,
  Theme,
  Typography
} from '@mui/material';
import Link from 'next/link';
import type { AutocompleteBaseProps } from './Autocomplete.interface';
import { StyledAutocomplete } from './Autocomplete.styled';
import { TextField } from '../TextField';
import { SearchIcon } from '../../icons';
import { activeTheme } from '@/utils';
import { AutocompleteSkeleton } from './Autocomplete.skeleton';

type EndAdornmenProps = {
  endIconType: 'link' | 'submit' | undefined;
  link: string | undefined;
};

const theme = activeTheme();
export interface AutocompleteProps extends Omit<AutocompleteBaseProps, 'renderInput'> {
  variant?: TextFieldVariants;
  sxTextField?: SxProps<Theme>;
}

const Autocomplete: FunctionComponent<AutocompleteProps> = (props) => {
  const {
    options = [],
    onChange,
    label,
    multiple = false,
    value,
    error,
    loading,
    link,
    endIconType,
    onChangeTextField,
    name,
    required,
    variant = 'outlined',
    sxTextField,
    isLoading = false,
    ...rest
  } = props;
  const arrayValue = Array.isArray(value) && !!multiple ? value : !multiple ? value : [];

  return (
    <AutocompleteSkeleton isLoading={isLoading}>
      <StyledAutocomplete
        renderOption={renderOption}
        {...rest}
        options={options}
        multiple={multiple}
        disableCloseOnSelect={multiple}
        onChange={(event, value, reason, details) => {
          if (multiple) {
            onChange && onChange(event, value, reason, details);
          } else {
            onChange && onChange(event, value, reason, details);
          }
        }}
        clearText="Remover"
        loadingText="Carregando"
        noOptionsText="Nenhum registro encontrado"
        filterSelectedOptions
        clearOnEscape
        value={arrayValue}
        renderInput={(params) => (
          <TextField
            variant={variant}
            error={error}
            {...params}
            sx={sxTextField}
            required={required}
            name={`autocomplete-${name}`}
            label={label}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                  <EndAdornmen link={link} endIconType={endIconType} />
                </>
              ),
              onChange: onChangeTextField
            }}
          />
        )}
      />
    </AutocompleteSkeleton>
  );
};

export default Autocomplete;

const renderOption = (props: object, option: any) => {
  const { label } = option;
  return (
    <Typography {...props} variant="subtitle1" fontFamily={'Lato, sans-serif'}>
      {label}
    </Typography>
  );
};

const EndAdornmen = ({ link = '', endIconType }: EndAdornmenProps) => {
  const Search = () => (
    <SearchIcon
      htmlColor={theme.palette.primary.main}
      style={{ display: 'inline-block', width: 21, height: 21 }}
    />
  );

  return (
    <InputAdornment position="end" sx={{ pr: 0.5, justifyContent: 'center', mt: 0.2 }}>
      {endIconType === 'link' && (
        <Link href={link} style={{ cursor: 'pointer' }}>
          <Search />
        </Link>
      )}
      {endIconType === 'submit' && (
        <IconButton type="submit">
          <Search />
        </IconButton>
      )}
    </InputAdornment>
  );
};

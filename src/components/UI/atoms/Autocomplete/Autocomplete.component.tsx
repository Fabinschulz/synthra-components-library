'use client';
import { FunctionComponent } from 'react';
import { CircularProgress, IconButton, InputAdornment, Typography } from '@mui/material';
import Link from 'next/link';
import { AutocompleteBaseProps } from './Autocomplete.interface';
import { StyledAutocomplete } from './Autocomplete.styled';
import { TextField } from '../TextField';
import React from 'react';
import { SearchIcon } from '../../icons';
import { activeTheme } from '@/utils';

type EndAdornmenProps = {
  endIconType: 'link' | 'submit' | undefined;
  link: string | undefined;
};

const theme = activeTheme();
export const Autocomplete: FunctionComponent<AutocompleteBaseProps> = (props) => {
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
    ...rest
  } = props;
  const arrayValue = Array.isArray(value) && !!multiple ? value : !multiple ? value : [];

  return (
    <StyledAutocomplete
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
      renderOption={renderOption}
      value={arrayValue}
      renderInput={(params) => (
        <TextField
          variant="outlined"
          error={error}
          {...params}
          required={required}
          name={`autocomplete-${name}`}
          label={label}
          slotProps={{
            ...params.InputProps,
            input: {
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                  <EndAdornmen link={link} endIconType={endIconType} />
                </>
              ),
              onChange: onChangeTextField
            }
          }}
        />
      )}
    />
  );
};

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

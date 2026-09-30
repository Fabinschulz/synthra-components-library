'use client';
import {
    CircularProgress,
    IconButton,
    InputAdornment,
    SxProps,
    TextFieldVariants,
    Theme,
    Typography
} from '@mui/material';
import { FunctionComponent } from 'react';
import { SearchIcon } from '../../icons';
import { TextField } from '../TextField';
import type { AutocompleteBaseProps } from './Autocomplete.interface';
import { AutocompleteSkeleton } from './Autocomplete.skeleton';
import { StyledAutocomplete } from './Autocomplete.styled';

type EndAdornmentProps = {
  endIconType: 'link' | 'submit' | undefined;
  link: string | undefined;
  label: string;
};

export interface AutocompleteProps extends Omit<AutocompleteBaseProps, 'renderInput'> {
  variant?: TextFieldVariants;
  sxTextField?: SxProps<Theme>;
}

const Autocomplete: FunctionComponent<AutocompleteProps> = (props) => {
  const {
    options = [],
    label,
    multiple = false,
    value,
    error,
    helperText,
    loading,
    link,
    endIconType,
    endIconLabel = 'Pesquisar',
    onChangeTextField,
    name,
    required,
    variant = 'outlined',
    sxTextField,
    skeleton = false,
    ...rest
  } = props;
  const arrayValue = Array.isArray(value) && !!multiple ? value : !multiple ? value : [];

  return (
    <AutocompleteSkeleton skeleton={skeleton}>
      <StyledAutocomplete
        renderOption={renderOption}
        clearText="Remover"
        loadingText="Carregando"
        noOptionsText="Nenhum registro encontrado"
        filterSelectedOptions
        clearOnEscape
        {...rest}
        loading={loading}
        options={options}
        multiple={multiple}
        disableCloseOnSelect={multiple}
        value={arrayValue}
        renderInput={(params) => (
          <TextField
            variant={variant}
            error={error}
            helperText={helperText}
            {...params}
            sx={sxTextField}
            required={required}
            name={name}
            label={label}
            slotProps={{
              ...params.slotProps,
              input: {
                ...params.slotProps.input,
                endAdornment: (
                  <>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.slotProps.input.endAdornment}
                    <EndAdornment link={link} endIconType={endIconType} label={endIconLabel} />
                  </>
                ),
                onChange: onChangeTextField
              }
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
    <Typography {...props} variant="subtitle1">
      {label}
    </Typography>
  );
};

const searchIconSx = { display: 'inline-block', width: 21, height: 21 };

const EndAdornment = ({ link = '', endIconType, label }: EndAdornmentProps) => {
  if (!endIconType) return null;

  return (
    <InputAdornment position="end" sx={{ pr: 0.5, justifyContent: 'center', mt: 0.2 }}>
      {endIconType === 'link' ? (
        <IconButton href={link} aria-label={label} size="small">
          <SearchIcon color="primary" sx={searchIconSx} />
        </IconButton>
      ) : (
        <IconButton type="submit" aria-label={label} size="small">
          <SearchIcon color="primary" sx={searchIconSx} />
        </IconButton>
      )}
    </InputAdornment>
  );
};

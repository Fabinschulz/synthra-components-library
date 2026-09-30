'use client';
import { useFormContext } from '@/contexts/formContext';
import { getObjectPropertyValue } from '@/utils';
import { Box, FormHelperText, IconButton, InputAdornment, SelectChangeEvent } from '@mui/material';
import { FunctionComponent, useId } from 'react';
import { CancelIcon, SearchIcon, SelectField, SelectFieldProps } from '../UI';

export interface SelectOption {
  label: string;
  value: string | number | undefined | boolean | null;
}

export type SelectFormFieldProps = Omit<SelectFieldProps, 'options'> & {
  name: string;

  /**
   * Determina os items do select
   */
  options?: SelectOption[];

  /**
   * Determina o Label do campo
   */
  label?: string;

  /**
   * Determina se o campo é obrigatorio
   */
  required?: boolean;

  /**
   * Habilita um botão de pesquisa no final do campo
   */
  showEndAdornment?: boolean;

  /**
   * Habilita um botão para limpar o valor do campo
   */
  showButtonClearValue?: boolean;

  /**
   * Nome acessível do botão de pesquisa
   * @default 'Pesquisar'
   */
  searchLabel?: string;

  /**
   * Nome acessível do botão de limpar
   * @default 'Limpar'
   */
  clearLabel?: string;
};

const SelectFormField: FunctionComponent<SelectFormFieldProps> = ({
  options = [],
  required,
  label,
  showEndAdornment,
  showButtonClearValue,
  searchLabel = 'Pesquisar',
  clearLabel = 'Limpar',
  ...props
}) => {
  const name = props.name;
  const errorId = useId();
  const { validationErrors, setValue, watch, readOnly } = useFormContext();

  const indexedOptions = options.map((option, index) => ({ label: option.label, value: index }));

  const currentValue = watch ? watch(name) : undefined;
  const selectedIndexes = props.multiple
    ? options.flatMap((option, index) => (currentValue?.includes(option.value) ? [index] : []))
    : options.findIndex((option) => option.value === currentValue);

  const errorsMessage: string | undefined =
    validationErrors && getObjectPropertyValue(name, validationErrors)?.message;

  const onChange = (event: SelectChangeEvent<unknown>) => {
    const selected = event.target?.value;
    if (props.multiple) {
      const indexes = (selected as number[]) ?? [];
      setValue(
        name,
        indexes.map((index) => options[index]?.value),
        { shouldDirty: true }
      );
    } else {
      setValue(name, options[selected as number]?.value, { shouldDirty: true });
    }
  };

  const hasValue = props.multiple
    ? (selectedIndexes as number[]).length > 0
    : (selectedIndexes as number) !== -1;

  return (
    <Box>
      <SelectField
        id={name}
        label={label}
        required={required}
        endAdornment={
          <>
            {showEndAdornment && (
              <InputAdornment position="end" sx={{ marginRight: 1.5 }}>
                <IconButton type="submit" aria-label={searchLabel}>
                  <SearchIcon sx={{ width: 25, height: 25, color: 'neutral.medium' }} />
                </IconButton>
              </InputAdornment>
            )}
            {showButtonClearValue && hasValue && !readOnly && (
              <InputAdornment position="end" sx={{ marginRight: 1.5 }}>
                <IconButton onClick={() => setValue(name, null)} aria-label={clearLabel}>
                  <CancelIcon sx={{ width: 15, height: 15, color: 'neutral.medium' }} />
                </IconButton>
              </InputAdornment>
            )}
          </>
        }
        error={!!errorsMessage}
        onChange={onChange}
        options={indexedOptions}
        value={props.multiple ? selectedIndexes : hasValue ? selectedIndexes : ''}
        disabled={!!readOnly}
        SelectDisplayProps={{
          'aria-describedby': errorsMessage ? errorId : undefined
        }}
        {...props}
      />
      {!!errorsMessage && (
        <FormHelperText id={errorId} error sx={{ mt: 0.5, typography: 'body1' }}>
          {errorsMessage}
        </FormHelperText>
      )}
    </Box>
  );
};

export default SelectFormField;

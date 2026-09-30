'use client';
import type { SelectFieldOption, SelectFieldProps } from './SelectField.interface';
import { FunctionComponent, useId } from 'react';
import { Checkbox, InputLabel, ListItemText, Select } from '@mui/material';
import { FormControl } from './SelectField.styled';
import { DownIcon } from '../../icons';
import { MenuItem } from '../MenuItem';
import { Typography } from '../Typography';

const SelectField: FunctionComponent<SelectFieldProps> = (props) => {
  const {
    label,
    items,
    options,
    noOptionsText = 'Nenhuma opção encontrada',
    required,
    onChange,
    multiple,
    value,
    disabled,
    variant,
    error,
    ...selectProps
  } = props;
  const id = useId();
  const isFilled = variant === 'filled';

  const normalizedOptions: SelectFieldOption[] =
    options ?? items?.map((item) => ({ label: item, value: item })) ?? [];
  const labelOf = (optionValue: unknown) =>
    normalizedOptions.find((option) => option.value === optionValue)?.label ?? String(optionValue);

  const arrayValue: unknown[] = Array.isArray(value) ? value : (!!value && [value]) || [];
  const total = arrayValue.length;

  return (
    <FormControl
      fullWidth
      disabled={disabled}
      required={required}
      error={error}
      variant={variant}
    >
      <InputLabel
        id={`select-${id}-label`}
        variant={variant}
        shrink={isFilled && multiple ? false : undefined}
      >
        {isFilled && multiple && !!total ? undefined : label}
      </InputLabel>
      <Select
        id={`select-${id}`}
        value={multiple ? arrayValue : value}
        label={label}
        onChange={onChange}
        multiple={multiple}
        disabled={disabled}
        IconComponent={DownIcon}
        renderValue={
          multiple ? (selected) => (selected as unknown[]).map(labelOf).join(', ') : undefined
        }
        variant={variant}
        {...selectProps}
        labelId={`select-${id}-label`}
        MenuProps={{
          elevation: 2,
          ...selectProps.MenuProps
        }}
      >
        {normalizedOptions.length === 0 && (
          <MenuItem disabled value="">
            {noOptionsText}
          </MenuItem>
        )}
        {normalizedOptions.map((option) => (
          <MenuItem dense={!multiple} value={option.value} key={option.value}>
            {multiple ? (
              <>
                <Checkbox
                  size="small"
                  checked={arrayValue.indexOf(option.value) > -1}
                  tabIndex={-1}
                  disableRipple
                  slotProps={{ input: { 'aria-hidden': true } }}
                />
                <ListItemText primary={option.label} />
              </>
            ) : (
              <Typography variant="body1" sx={{ fontWeight: 500, color: 'neutral.dark' }}>
                {option.label}
              </Typography>
            )}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;

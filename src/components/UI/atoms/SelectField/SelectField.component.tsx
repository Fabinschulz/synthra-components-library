'use client';
import type { SelectFieldProps } from './SelectField.interface';
import { FunctionComponent, useId } from 'react';
import { Box, InputLabel, Select } from '@mui/material';
import { FormControl, SelectMenuItem } from './SelectField.styled';
import { Checkbox } from '../Checkbox';
import { DownIcon } from '../../icons';

export const SelectField: FunctionComponent<SelectFieldProps> = (props) => {
  const { label, items, required, onChange, multiple, value, disabled, variant, ...selectProps } =
    props;
  const id = useId();
  const isFilled = variant === 'filled';

  const arrayValue = Array.isArray(value) ? value : (!!value && [value]) || [];
  const total = arrayValue.length;

  return (
    <FormControl fullWidth disabled={disabled} required={required} variant={variant}>
      <InputLabel
        id={`select-${id}-label`}
        required={required}
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
        renderValue={multiple ? (selected) => (selected as string[]).join(', ') : undefined}
        variant={variant}
        {...selectProps}
        labelId={`select-${id}-label`}
        MenuProps={{
          elevation: 2,
          ...selectProps.MenuProps
        }}
      >
        {items?.map((item, index) => (
          <SelectMenuItem dense={!multiple} value={item} key={index} color="primary">
            {multiple ? (
              <Box sx={{ pointerEvents: 'none' }}>
                <Checkbox size="small" label={item} checked={arrayValue.indexOf(item) > -1} />
              </Box>
            ) : (
              item
            )}
          </SelectMenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

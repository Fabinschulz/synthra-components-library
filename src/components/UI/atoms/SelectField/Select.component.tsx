'use client';
import React, { FunctionComponent } from 'react';
import { Box, InputLabel } from '@mui/material';
import { MdKeyboardArrowDown } from 'react-icons/md';
import type { SelectProps } from './Select.interface';
import { StyledFormControl, StyledSelect } from './SelectField.styled';
import { MenuItemMUI } from '../MenuItem';
import { CheckboxField } from '../Checkbox';

export const SelectField: FunctionComponent<SelectProps> = ({
  label,
  items,
  required,
  onChange,
  multiple,
  value,
  disabled,
  name,
  ...rest
}) => {
  const arrayValue = Array.isArray(value) ? value : (!!value && [value]) || [];

  return (
    <StyledFormControl fullWidth disabled={disabled} required={required} variant="outlined">
      {label && (
        <InputLabel id={`select-${label}`} required={required} variant="outlined">
          {label}
        </InputLabel>
      )}
      <StyledSelect
        data-testid={name}
        name={name}
        id={`select-${label}`}
        value={multiple ? arrayValue : value}
        label={label}
        onChange={onChange}
        multiple={multiple}
        disabled={disabled}
        renderValue={multiple ? (selected) => (selected as string[]).join(', ') : undefined}
        variant="outlined"
        {...rest}
        labelId={`select-${label}`}
        IconComponent={MdKeyboardArrowDown}
        MenuProps={{
          elevation: 2,
          ...rest.MenuProps
        }}
      >
        {items?.map((item, index) => (
          <MenuItemMUI dense={!multiple} value={item} key={index}>
            {multiple ? (
              <Box sx={{ pointerEvents: 'none' }}>
                <CheckboxField size="small" label={item} checked={arrayValue.indexOf(item) > -1} />
              </Box>
            ) : (
              item
            )}
          </MenuItemMUI>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
};

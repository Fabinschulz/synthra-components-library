import type { FunctionComponent } from 'react';
import { DropdownProps } from './Dropdown.interface';
import { useState } from 'react';
import { InputLabel } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl } from './Dropdown.styled';
import { MenuItem } from '../MenuItem';
import { ChevronDownIcon } from '../../icons';

export const Dropdown: FunctionComponent<DropdownProps> = ({
  name,
  label,
  items,
  required,
  className,
  disabled
}) => {
  const [activeItem, setActiveItem] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setActiveItem(event.target.value as string);
  };

  const labelId = `${name ?? 'dropdown'}-label`;
  const nameId = `${name ?? 'dropdown'}`;

  return (
    <FormControl fullWidth className={className}>
      {label && (
        <InputLabel id={labelId} required={required}>
          {label}
        </InputLabel>
      )}
      <Select
        labelId={labelId}
        id={nameId}
        value={activeItem}
        label={label}
        onChange={handleChange}
        displayEmpty
        disabled={disabled}
        IconComponent={ChevronDownIcon}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="">{items?.[0]}</MenuItem>
        {items
          ?.filter((_, index) => index > 0)
          .map((item, index) => (
            <MenuItem value={index} key={item}>
              {item}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

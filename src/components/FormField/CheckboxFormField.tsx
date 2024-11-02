'use client';
import { CheckboxProps } from '@mui/material';
import { FunctionComponent } from 'react';
import { activeTheme, getObjectPropertyValue } from '@/utils';
import { useFormContext } from '@/contexts/formContext';
import { Checkbox, Typography } from '../UI';
import React from 'react';

export interface CheckboxFormFieldProps extends CheckboxProps {
  name: string;
  label: string;
}

const theme = activeTheme();
const CheckboxFormField: FunctionComponent<CheckboxFormFieldProps> = ({ label, ...props }) => {
  const name = props.name;
  let value = undefined;
  let { validationErrors, watch, setValue } = useFormContext();

  if (watch) {
    value = watch(name);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setValue(name, newValue, { shouldDirty: true });
  };

  const errorsMessage = validationErrors && getObjectPropertyValue(name, validationErrors)?.message;

  return (
    <>
      <Checkbox
        label={label}
        onChange={onChange}
        checked={value === true}
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
        {...props}
      />
      {!!errorsMessage && (
        <Typography mt={0.5} variant="body1" color={theme.palette?.error?.dark}>
          {errorsMessage}
        </Typography>
      )}
    </>
  );
};

export default CheckboxFormField;

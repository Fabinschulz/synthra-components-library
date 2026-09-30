'use client';
import { FormHelperText } from '@mui/material';
import { FunctionComponent, useId } from 'react';
import { getObjectPropertyValue } from '@/utils';
import { useFormContext } from '@/contexts/formContext';
import { Checkbox, CheckboxProps } from '../UI';
import React from 'react';

export interface CheckboxFormFieldProps extends CheckboxProps {
  name: string;
  label: string;
}

const CheckboxFormField: FunctionComponent<CheckboxFormFieldProps> = ({ label, ...props }) => {
  const name = props.name;
  const errorId = useId();
  let value = undefined;
  let { validationErrors, watch, setValue, readOnly } = useFormContext();

  if (watch) {
    value = watch(name);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setValue(name, newValue, { shouldDirty: true });
  };

  const errorsMessage: string | undefined =
    validationErrors && getObjectPropertyValue(name, validationErrors)?.message;

  return (
    <>
      <Checkbox
        label={label}
        onChange={onChange}
        checked={value === true}
        disabled={readOnly || props.disabled}
        slotProps={{
          input: {
            'aria-invalid': !!errorsMessage,
            'aria-describedby': errorsMessage ? errorId : undefined
          }
        }}
        {...props}
      />
      {!!errorsMessage && (
        <FormHelperText id={errorId} error sx={{ mt: 0.5, typography: 'body1' }}>
          {errorsMessage}
        </FormHelperText>
      )}
    </>
  );
};

export default CheckboxFormField;

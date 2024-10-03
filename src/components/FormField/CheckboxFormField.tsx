'use client';
import { CheckboxProps } from '@mui/material';
import { FunctionComponent } from 'react';
import { activeTheme, getObjectPropertyValue } from '@/utils';
import { useFormContext } from '@/contexts/formContext';
import { Caption2, CheckboxField } from '../UI';
import React from 'react';

export interface CheckboxFormFieldProps extends CheckboxProps {
  name: string;
  label: string;
}

const theme = activeTheme();
export const CheckboxFormField: FunctionComponent<CheckboxFormFieldProps> = ({
  label,
  ...props
}) => {
  const name = props.name;
  let value = undefined;
  var { validationErrors, watch, setValue } = useFormContext();

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
      <CheckboxField
        label={label}
        onChange={onChange}
        checked={value === true}
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
        {...props}
      />
      {!!errorsMessage && (
        <Caption2 color={theme.palette.error.dark} variant="caption">
          <>{errorsMessage}</>
        </Caption2>
      )}
    </>
  );
};

'use client';
import React from 'react';
import { Controller } from 'react-hook-form';
import { activeTheme, getObjectPropertyValue } from '@/utils';
import { useFormContext } from '@/contexts/formContext';
import { ITextFieldProps, TextField, Typography } from '../UI';

interface TextFormFieldProps extends ITextFieldProps {
  name: string;
}

const theme = activeTheme();
export const TextFormField = (props: TextFormFieldProps) => {
  const { name, ...rest } = props;
  const { register, control, validationErrors } = useFormContext();

  const errorsMessage = validationErrors && getObjectPropertyValue(name, validationErrors)?.message;

  return (
    <>
      <Controller
        render={({ field }) => <TextField {...register(name)} {...field} {...rest} />}
        name={name}
        control={control}
      />
      {!!errorsMessage && (
        <Typography mt={0.5} variant="body1" color={theme.palette.error.dark}>
          <>{errorsMessage}</>
        </Typography>
      )}
    </>
  );
};

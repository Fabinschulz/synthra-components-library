'use client';
import { useFormContext } from '@/contexts/formContext';
import { getObjectPropertyValue } from '@/utils';
import { Controller } from 'react-hook-form';
import { TextField, TextFieldProps } from '../UI';

type TextFormFieldProps = TextFieldProps & {
  name: string;
};

const TextFormField = (props: TextFormFieldProps) => {
  const { name, helperText, ...rest } = props;
  const { control, validationErrors, readOnly } = useFormContext();

  const errorsMessage: string | undefined =
    validationErrors && getObjectPropertyValue(name, validationErrors)?.message;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field } }) => (
        <TextField
          {...field}
          value={field.value ?? ''}
          inputRef={ref}
          disabled={readOnly || rest.disabled}
          {...rest}
          error={!!errorsMessage || rest.error}
          helperText={errorsMessage ?? helperText}
        />
      )}
    />
  );
};

export default TextFormField;

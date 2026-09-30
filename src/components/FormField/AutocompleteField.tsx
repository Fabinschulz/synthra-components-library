'use client';
import { useFormContext } from '@/contexts/formContext';
import { getObjectPropertyValue } from '@/utils';
import { Autocomplete, AutocompleteBaseProps } from '../UI';

type AutocompleteFieldProps = {
  name: string;
} & AutocompleteBaseProps;

export default function AutocompleteField(props: AutocompleteFieldProps) {
  const { name, disabled } = props;
  const { validationErrors, watch, setValue, readOnly } = useFormContext();

  const onChange = (_: any, opt: any) => {
    setValue(name, opt?.value, { shouldDirty: true });
  };

  const autoCompleteValue = { value: watch(name) };
  const errorsMessage: string | undefined =
    validationErrors && getObjectPropertyValue(name, validationErrors)?.message;

  return (
    <Autocomplete
      disabled={disabled || readOnly}
      value={autoCompleteValue}
      {...props}
      error={!!errorsMessage || props.error}
      helperText={errorsMessage ?? props.helperText}
      onChange={onChange}
    />
  );
}

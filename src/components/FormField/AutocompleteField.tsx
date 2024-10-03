'use client';
import { useFormContext } from '@/contexts/formContext';
import { Autocomplete, Caption2, IAutocompleteProps } from '../UI';
import { activeTheme, getObjectPropertyValue } from '@/utils';
import React from 'react';

type AutocompleteFieldProps = {
  name: string;
} & IAutocompleteProps;

const theme = activeTheme();
export default function AutocompleteField(props: AutocompleteFieldProps) {
  const { name, disabled } = props;
  const { validationErrors, watch, setValue, readOnly } = useFormContext();

  const onChange = (_: any, opt: any) => {
    setValue(name, opt?.value, { shouldDirty: true });
  };

  const autoCompleteValue = { value: watch(name) };
  const errorsMessage = validationErrors && getObjectPropertyValue(name, validationErrors)?.message;

  return (
    <div>
      <Autocomplete
        disabled={disabled || readOnly}
        value={autoCompleteValue}
        error={errorsMessage?.length > 0 ? true : false}
        {...props}
        onChange={onChange}
      />
      {!!errorsMessage && (
        <Caption2 color={theme.palette.error.dark} variant="caption">
          <>{errorsMessage}</>
        </Caption2>
      )}
    </div>
  );
}

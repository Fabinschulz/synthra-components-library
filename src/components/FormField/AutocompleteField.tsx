'use client';
import { useFormContext } from '@/contexts/formContext';
import { Autocomplete, AutocompleteBaseProps, Typography } from '../UI';
import { activeTheme, getObjectPropertyValue } from '@/utils';

type AutocompleteFieldProps = {
  name: string;
} & AutocompleteBaseProps;

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
    <>
      <Autocomplete
        disabled={disabled || readOnly}
        value={autoCompleteValue}
        error={errorsMessage?.length > 0 ? true : false}
        {...props}
        onChange={onChange}
      />
      {!!errorsMessage && (
        <Typography mt={0.5} variant="body1" color={theme.palette?.error?.dark}>
          {errorsMessage}
        </Typography>
      )}
    </>
  );
}

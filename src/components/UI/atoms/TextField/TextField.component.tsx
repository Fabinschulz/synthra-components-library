'use client';
import type { FunctionComponent } from 'react';
import { StyledTextField } from './TextField.styled';
import type { ITextFieldProps } from './TextField.interface';

export const TextField: FunctionComponent<ITextFieldProps> = ({
  label,
  required,
  disabled,
  dataTestId,
  maxLength,
  returnRules,
  ...props
}) => {
  const labelWithRequired = required ? `${label} *` : label;

  return (
    <StyledTextField
      variant="outlined"
      label={labelWithRequired}
      inputProps={{ maxLength }}
      data-testid={dataTestId}
      {...props}
    />
  );
};

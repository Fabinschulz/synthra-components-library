'use client';
import type { FunctionComponent } from 'react';
import { StyledTextField } from './TextField.styled';
import type { ITextFieldProps } from './TextField.interface';

const TextField: FunctionComponent<ITextFieldProps> = ({
  label,
  required,
  dataTestId,
  maxLength,
  ...props
}) => {
  const labelWithRequired = required ? `${label} *` : label;

  return (
    <StyledTextField
      label={labelWithRequired}
      slotProps={{ htmlInput: { maxLength } }}
      data-testId={dataTestId}
      {...props}
    />
  );
};

export default TextField;

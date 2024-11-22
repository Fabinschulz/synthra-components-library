'use client';
import type { FunctionComponent } from 'react';
import { StyledTextField } from './TextField.styled';
import type { ITextFieldProps } from './TextField.interface';

const TextField: FunctionComponent<ITextFieldProps> = ({
  label,
  required,
  dataTestId,
  variant = 'outlined',
  ...props
}) => {
  const labelWithRequired = required ? `${label} *` : label;

  return (
    <StyledTextField
      label={labelWithRequired}
      data-testId={dataTestId}
      variant={variant}
      {...props}
    />
  );
};

export default TextField;

'use client';
import type { FunctionComponent } from 'react';
import { StyledTextField } from './TextField.styled';
import type { ITextFieldProps } from './TextField.interface';
import { TextFieldSkeleton } from './TextField.skeleton';

const TextField: FunctionComponent<ITextFieldProps> = ({
  label,
  required,
  dataTestId,
  variant = 'outlined',
  isLoading = false,
  ...props
}) => {
  const labelWithRequired = required ? `${label} *` : label;

  return (
    <TextFieldSkeleton isLoading={isLoading}>
      <StyledTextField
        label={labelWithRequired}
        data-testId={`${dataTestId}-textField`}
        variant={variant}
        {...props}
      />
    </TextFieldSkeleton>
  );
};

export default TextField;

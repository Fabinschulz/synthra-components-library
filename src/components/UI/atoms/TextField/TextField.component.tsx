'use client';
import type { FunctionComponent } from 'react';
import { StyledTextField } from './TextField.styled';
import type { TextFieldProps } from './TextField.interface';
import { TextFieldSkeleton } from './TextField.skeleton';

const TextField: FunctionComponent<TextFieldProps> = ({
  variant = 'outlined',
  skeleton = false,
  ...props
}) => {
  return (
    <TextFieldSkeleton skeleton={skeleton}>
      <StyledTextField
        variant={variant}
        {...props}
      />
    </TextFieldSkeleton>
  );
};

export default TextField;

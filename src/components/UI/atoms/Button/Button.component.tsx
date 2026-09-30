'use client';
import type { FunctionComponent } from 'react';
import type { ButtonProps } from './Button.interface';
import { Button as MuiButton } from '@mui/material';
import ButtonSkeleton from './Button.skeleton';

const Button: FunctionComponent<ButtonProps> = ({ skeleton = false, ...props }) => {
  return (
    <ButtonSkeleton skeleton={skeleton} fullWidth={props.fullWidth}>
      <MuiButton data-testid={props.name} {...props} />
    </ButtonSkeleton>
  );
};

export default Button;

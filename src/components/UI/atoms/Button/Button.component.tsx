import type { FunctionComponent } from 'react';
import type { IButtonProps } from './Button.interface';
import { Button as MuiButton } from '@mui/material';

export const Button: FunctionComponent<IButtonProps> = ({ name, ...props }) => {
  return <MuiButton {...props} data-testid={name} name={name} />;
};

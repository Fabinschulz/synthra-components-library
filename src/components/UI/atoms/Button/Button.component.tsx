import type { FunctionComponent } from 'react';
import type { IButtonProps } from './Button.interface';
import { Button as MuiButton } from '@mui/material';
import ButtonSkeleton from './Button.skeleton';

const Button: FunctionComponent<IButtonProps> = ({ name, ...props }) => {
  return (
    <ButtonSkeleton isLoading={props.isLoading} fullWidth={props.fullWidth}>
      <MuiButton {...props} data-testid={name} name={name} />
    </ButtonSkeleton>
  );
};

export default Button;

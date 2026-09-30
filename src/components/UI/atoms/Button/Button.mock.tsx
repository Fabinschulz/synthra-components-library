import { RightIcon, LeftIcon } from '../../icons';
import { ButtonProps } from './Button.interface';

export const argsProps: ButtonProps = {
  variant: 'contained',
  color: 'primary',
  children: 'Submit',
  size: 'medium',
  fullWidth: false,
  disabled: false,
  skeleton: false
};

export const iconeADireitaProps: ButtonProps = {
  endIcon: <RightIcon htmlColor="#FFFFFF" />,
  variant: 'contained',
  color: 'primary',
  children: 'Submit',
  size: 'medium',
  fullWidth: false,
  disabled: false,
  skeleton: false
};

export const iconeAEsquerdaProps: ButtonProps = {
  startIcon: <LeftIcon htmlColor="#FFFFFF" />,
  variant: 'contained',
  color: 'primary',
  children: 'Submit',
  size: 'medium',
  fullWidth: false,
  disabled: false,
  skeleton: false
};

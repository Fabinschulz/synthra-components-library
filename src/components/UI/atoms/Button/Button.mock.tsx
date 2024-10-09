import { RightIcon, LeftIcon } from '../../icons';
import { IButtonProps } from './Button.interface';

export const argsProps: IButtonProps = {
  variant: 'contained',
  color: 'primary',
  children: 'Submit',
  size: 'medium',
  fullWidth: false,
  disabled: false,
};

export const iconeADireitaProps: IButtonProps = {
  endIcon: <RightIcon htmlColor='#FFFFFF' />,
  variant: 'contained',
  color: 'primary',
  children: 'Submit',
  size: 'medium',
  fullWidth: false,
  disabled: false,
};

export const iconeAEsquerdaProps: IButtonProps = {
  startIcon: <LeftIcon htmlColor='#FFFFFF' />,
  variant: 'contained',
  color: 'primary',
  children: 'Submit',
  size: 'medium',
  fullWidth: false,
  disabled: false,
};

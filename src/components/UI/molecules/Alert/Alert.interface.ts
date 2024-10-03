import { AlertProps as MuiAlert } from '@mui/material';
import { ReactNode } from 'react';

export interface IAlertProps extends Omit<MuiAlert, 'severity'> {
  type: MuiAlert['severity'];
  title: string;
  description?: ReactNode | string;
  dataTestId?: string;
  customStyle?: object;
  overrideStyle?: object;
  variant?: 'filled' | 'outlined' | 'standard';
}

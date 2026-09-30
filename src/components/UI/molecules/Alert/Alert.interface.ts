import { AlertProps as MuiAlertProps } from '@mui/material';
import { ReactNode } from 'react';

export interface AlertProps extends MuiAlertProps {
  /**
   * Define o título do alerta
   * @default ''
   * @example <Alert title="Alerta" />
   */
  title?: string;

  /**
   * Define a descrição do alerta (também aceita `children`)
   * @default ''
   * @example <Alert description="Alerta de exemplo" />
   */
  description?: ReactNode | string;
}

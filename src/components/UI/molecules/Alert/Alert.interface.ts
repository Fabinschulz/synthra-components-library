import { AlertProps as MuiAlert } from '@mui/material';
import { ReactNode } from 'react';

export interface IAlertProps extends Omit<MuiAlert, 'severity'> {
  /**
   * Define o tipo de alerta
   * @default 'info'
   * @type {'info' | 'success' | 'warning' | 'error'}
   * @example <Alert type="info" />
   */
  type: MuiAlert['severity'];

  /**
   * Define o título do alerta
   * @default ''
   * @type {string}
   * @example <Alert title="Alerta" />
   */
  title?: string;

  /**
   * Define a descrição do alerta
   * @default ''
   * @type {ReactNode | string}
   * @example <Alert description="Alerta de exemplo" />
   */
  description?: ReactNode | string;

  /**
   * Define o atributo de teste automatizado
   * @default ''
   * @type {string}
   * @example <Alert dataTestId="alert" />
   * @see IAlertProps
   */
  dataTestId?: string;
}

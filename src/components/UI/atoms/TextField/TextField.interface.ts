import { OutlinedTextFieldProps } from '@mui/material';

/**
 * Interface que estende as propriedades de `OutlinedTextFieldProps`,
 *
 * @interface TextFieldProps
 * @extends {OutlinedTextFieldProps}
 * @property {string} dataTestId - Atributo de teste automatizado.
 * @property {number} maxLength - Tamanho máximo de caracteres.
 */
export interface ITextFieldProps extends OutlinedTextFieldProps {
  /**
   * Atributo de teste automatizado.
   * @default ''
   * @type {string}
   * @example <TextField dataTestId="input" />
   */
  dataTestId?: string;
  /**
   * Tamanho máximo de caracteres.
   * @default 0
   * @type {number}
   * @example <TextField maxLength={10} />
   */
  maxLength?: number;
}

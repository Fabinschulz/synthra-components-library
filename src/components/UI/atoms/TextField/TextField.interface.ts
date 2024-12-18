import { TextFieldProps } from '@mui/material';

/**
 * Interface que estende as propriedades de `TextFieldProps`,
 *
 * @interface TextFieldProps
 * @extends {TextFieldProps}
 * @property {string} dataTestId - Atributo de teste automatizado.
 */
export type ITextFieldProps = TextFieldProps & {
  /**
   * Atributo de teste automatizado.
   * @default ''
   * @type {string}
   * @example <TextField dataTestId="input" />
   */
  dataTestId?: string;

  /**
   * Determina se o skeleton do TextField deve ser exibido.
   * @default false
   * @type {boolean}
   * @example <TextField isLoading />
   */
  isLoading?: boolean;
};

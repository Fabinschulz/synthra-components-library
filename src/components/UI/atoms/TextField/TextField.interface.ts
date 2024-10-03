import { OutlinedTextFieldProps } from '@mui/material';

/**
 * Interface que estende as propriedades de `OutlinedTextFieldProps`,
 * omitindo a propriedade `variant`.
 *
 * @interface TextFieldProps
 * @extends {Omit<OutlinedTextFieldProps, 'variant'>}
 */
export interface ITextFieldProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  dataTestId?: string;
  maxLength?: number;
  hasError?: boolean;
  returnRules?: IReturnRules;
}

interface IReturnRules {
  noEmojis?: boolean;
  onlyNumbers?: boolean;
  onlyNumbersAndLetters?: boolean;
}

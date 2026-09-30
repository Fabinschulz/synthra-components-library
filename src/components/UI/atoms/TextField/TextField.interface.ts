import { TextFieldProps as MuiTextFieldProps } from '@mui/material';

/**
 * Propriedades do `TextField`: todas as do `TextField` do MUI, mais o skeleton.
 */
export type TextFieldProps = MuiTextFieldProps & {
  /**
   * Determina se o skeleton do TextField deve ser exibido.
   * @default false
   * @example <TextField skeleton />
   */
  skeleton?: boolean;
};

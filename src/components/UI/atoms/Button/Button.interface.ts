import { ButtonProps as MuiButtonProps } from '@mui/material';

export interface IButtonProps extends MuiButtonProps {
  /**
   *  Determina se o skeleton do button deve ser exibido.
   * @default false
   * @type boolean
   * @example <Button isLoading />
   */
  isLoading: boolean;
}

import { ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends MuiButtonProps {
  /**
   * Exibe um skeleton no lugar do botão enquanto o conteúdo da tela carrega.
   * Para indicar uma ação em andamento (ex.: envio de formulário), use `loading`.
   * @default false
   * @example <Button skeleton />
   */
  skeleton?: boolean;
}

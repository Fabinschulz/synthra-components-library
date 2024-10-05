import { SelectProps } from '@mui/material';

export type DropdownProps = SelectProps & {
  /**
   * Determina o Label do campo
   * @default undefined
   * @example 'Nome'
   * @type string
   * @required false
   */
  label?: string;

  /**
   * Determina se o campo é obrigatorio,
   * @default false
   * @example true
   * @type boolean
   * @required false
   */
  required?: boolean;

  /**
   * Determina os items do select
   * @default []
   * @example ['item1', 'item2', 'item3']
   * @type string[]
   * @required false
   */
  items?: string[];

  /**
   * Determina o nome do campo
   * @default undefined
   * @example 'nome'
   * @type string
   * @required false
   */
  name?: string;

  /**
   * Determina se o campo está desabilitado
   * @default false
   * @example true
   * @type boolean
   * @required false
   */
  disabled?: boolean;
};

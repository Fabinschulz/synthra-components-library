import { SelectProps as MuiSelectProps } from '@mui/material';

export type SelectFieldProps = MuiSelectProps & {
  /**
   * Determina a Label do campo
   * @default ''
   * @type {string}
   * @example <Select label="Nome" />
   */
  label?: string;

  /**
   * Determina se o campo é obrigatorio
   * @default false
   * @type {boolean}
   * @example <Select required />
   */
  required?: boolean;

  /**
   * Define os itens disponíveis para o componente Select.
   * @default []
   * @type {Array<string>}
   * @example
   * // Exemplo de utilização:
   * <Select items={['Opção 1', 'Opção 2', 'Opção 3']} />
   *
   * @param {Array<string>} items - Uma matriz de strings representando os itens do select.
   */
  items?: string[];
};

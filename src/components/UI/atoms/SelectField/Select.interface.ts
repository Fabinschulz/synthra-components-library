import { SelectProps as MuiSelectProps } from '@mui/material';

export type SelectProps = MuiSelectProps & {
  /**
   * Determina a Label do campo
   * @default ''
   * @type {string}
   */
  label?: string;

  /**
   * Determina se o campo é obrigatorio
   * @default false
   * @type {boolean}
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

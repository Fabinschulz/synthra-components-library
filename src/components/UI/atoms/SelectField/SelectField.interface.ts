import { SelectProps as MuiSelectProps } from '@mui/material';

export interface SelectFieldOption {
  /** Texto exibido. */
  label: string;

  /** Valor enviado no `onChange`. */
  value: string | number;
}

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
   * Itens em que o texto exibido também é o valor.
   * Para separar texto e valor, use `options`.
   * @default []
   * @example <Select items={['Opção 1', 'Opção 2', 'Opção 3']} />
   */
  items?: string[];

  /**
   * Opções com texto e valor separados. Tem prioridade sobre `items`.
   * @example <Select options={[{ label: 'Ativo', value: 1 }, { label: 'Inativo', value: 0 }]} />
   */
  options?: SelectFieldOption[];

  /**
   * Texto exibido (desabilitado) quando não há opções.
   * @default 'Nenhuma opção encontrada'
   */
  noOptionsText?: string;
};

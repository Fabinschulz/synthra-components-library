import { AutocompleteProps as AutocompletePropsMUI } from '@mui/material';

export type AutocompleteBaseProps = {
  /**
   * Determina a Label do campo
   * @default ''
   * @type {string}
   */
  label?: string;

  /**
   * Indica se há um erro no campo.
   * @default false
   * @type boolean
   */
  error?: boolean;

  /**
   * Texto de apoio exibido abaixo do campo (ex.: mensagem de erro), associado ao input.
   */
  helperText?: React.ReactNode;

  /**
   * Ativa o indicador de carregamento no campo.
   * @default false
   * @type boolean
   */
  loading?: boolean;

  /**
   * Define o tipo do ícone exibido no final do campo.
   * @type 'link' | 'submit' | undefined
   */
  endIconType?: 'link' | 'submit' | undefined;

  /**
   * Nome acessível do botão exibido quando `endIconType` é definido.
   * @default 'Pesquisar'
   */
  endIconLabel?: string;

  /**
   * Link associado ao ícone no final do campo (apenas se `endIconType` for 'link').
   * @type string | undefined
   */
  link?: string | undefined;

  /**
   * Função chamada quando o valor do campo é alterado (aplica-se a componentes "TextField").
   * @param event - Objeto de evento do React para a alteração no campo.
   * @type (event: React.ChangeEvent<HTMLInputElement>) => void
   */
  onChangeTextField?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Nome identificador único do campo.
   * @type string
   */
  name: string;

  /**
   * Indica se o campo é obrigatório.
   * @default false
   * @type boolean
   */
  required?: boolean;

  /**
   * Determina se o skeleton do autocomplete deve ser exibido.
   * @default false
   * @example <Autocomplete skeleton />
   */
  skeleton?: boolean;
} & AutocompletePropsMUI<
  unknown,
  boolean | undefined,
  boolean | undefined,
  boolean | undefined,
  React.ElementType<any, keyof React.JSX.IntrinsicElements>
>;

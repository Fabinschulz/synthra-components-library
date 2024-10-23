export interface CodeFieldProps {
  /**
   * Determina o nome do campo
   * @default ''
   * @type {string}
   */
  name: string;

  /**
   * Determina se o campo é um toggle
   * @default false
   * @type boolean
   */

  toggle: boolean;

  /**
   * Determina a quantidade de campos
   * @default 6
   * @type number
   */
  fields?: number;
}

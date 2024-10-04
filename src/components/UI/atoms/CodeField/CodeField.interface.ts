export interface CodeFieldProps {
  /**
   * Determina o valor do campo
   * @default ''
   * @type {string}
   */
  value?: string;

  /**
   *  Submete o valor do campo
   * @default () => {}
   * @type {(code: string) => void}
   */
  onSubmit?: (code: string) => void;
}

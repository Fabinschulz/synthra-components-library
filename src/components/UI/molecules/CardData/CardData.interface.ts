export interface CardDataProps {
  /**
   * Determina a lista de items
   * @default []
   * @example [{id: '1', title: 'Total de vendas', value: 'R$ 1.000,00', uppercase: 'uppercase', color: 'success'}]
   * @type {Item[]}
   * @required
   * @see Item
   */
  listItem?: Item[];
}

export interface Item {
  /**
   * Determina o id do item
   * @type {string}
   * @required
   */
  id: string;
  /**
   * Determina o titulo
   * @type {string | React.ReactNode}
   * @default ''
   * @example 'Total de vendas'
   */
  title?: string | React.ReactNode;
  /**
   * Determina o valor referente ao titulo
   * @type {string | React.ReactNode}
   * @default ''
   */
  value?: string | React.ReactNode;

  /**
   * Determina se o valor será maiusculo ou minusculo
   * @type {'initial' | 'uppercase'}
   * @default 'initial'
   * @example 'uppercase'
   */
  uppercase?: 'initial' | 'uppercase';

  /**
   * Determina a cor do TooltipIcon
   * @type {'success' | 'warning' | 'info' | 'error' | 'medium'}
   * @default 'medium'
   * @example 'success'
   */

  color?: 'success' | 'warning' | 'info' | 'error' | 'medium';
}

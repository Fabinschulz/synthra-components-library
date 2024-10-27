import { ReactNode } from 'react';

export interface ModalProps {
  /**
   * Determina o titulo do modal
   * @default ''
   * @example 'Modal title'
   * @type {string}
   */
  title?: string;

  /**
   * Determina a descrição
   * @default ''
   * @example 'Modal description'
   * @type {string}
   */
  description?: string;

  /**
   * Determina o icone
   * @default null
   * @example <Icon />
   * @type {ReactNode}
   * @see Icon
   */
  icon?: ReactNode;

  /**
   * Determina o tamanho do icone
   * @default 'medium'
   * @example 'small'
   * @type {'small' | 'large'}
   */
  size?: 'small' | 'large';

  /**
   * Determina o tamanho do modal
   * @default 'medium'
   * @example 'small'
   * @type {'small' | 'medium' | 'large'}
   * @see Modal
   */
  sizeModal?: 'small' | 'medium' | 'large';

  /**
   * Determina a direção do conteudo interno do modal
   * @default 'row'
   * @example 'column'
   * @type {'row' | 'column'}
   */
  direction?: 'row' | 'column';

  /**
   * Determina se o texto estará centralizado ou alinhado a esquerda
   * @default 'center'
   * @example 'left'
   * @type {'center' | 'left'}
   */
  align?: 'center' | 'left';

  /**
   * Determina o conteudo interno do modal
   * @default null
   * @example <div>Conteudo do modal</div>
   * @type {ReactNode}
   * @see Modal
   */
  children?: ReactNode;

  /**
   * Determina se o modal está aberto
   * @default false
   * @example true
   * @type {boolean}
   * @see Modal
   */
  open: boolean;

  /**
   * Determina a ação de feixar o modal
   * @default () => {}
   * @example () => console.log('Modal closed')
   * @type {() => void}
   * @see Modal
   */
  onClose?: () => void;
}

import { ReactNode } from 'react';

export interface ModalProps {
  /**
   * Determina o titulo do modal (também usado como nome acessível do diálogo)
   * @default ''
   * @example 'Modal title'
   * @type {string}
   */
  title?: string;

  /**
   * Determina a descrição (associada ao diálogo via `aria-describedby`)
   * @default ''
   * @example 'Modal description'
   * @type {string}
   */
  description?: string;

  /**
   * Determina o icone (oculto em telas pequenas)
   * @default null
   * @example <Icon />
   * @type {ReactNode}
   * @see Icon
   */
  icon?: ReactNode;

  /**
   * Determina o tamanho do icone
   * @default 'small'
   * @example 'large'
   * @type {'small' | 'large'}
   */
  size?: 'small' | 'large';

  /**
   * Determina a largura máxima do modal (460, 646 ou 900px)
   * @default 'small'
   * @example 'medium'
   * @type {'small' | 'medium' | 'large'}
   * @see Modal
   */
  sizeModal?: 'small' | 'medium' | 'large';

  /**
   * Determina a direção entre o ícone e os textos
   * @default 'column'
   * @example 'row'
   * @type {'row' | 'column'}
   */
  direction?: 'row' | 'column';

  /**
   * Determina se o texto estará centralizado ou alinhado a esquerda
   * @default 'left'
   * @example 'center'
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
   * Chamado ao fechar (tecla Esc, clique fora ou botão fechar). Sem ele, o botão fechar não é exibido.
   * @example () => setOpen(false)
   * @type {() => void}
   * @see Modal
   */
  onClose?: () => void;

  /**
   * Nome acessível do botão fechar.
   * @default 'Fechar'
   */
  closeLabel?: string;
}

import { ReactNode } from 'react';

export interface ModalProps {
  /**
   * Determina o titulo do modal
   */
  title?: string;

  /**
   * Determina a descrição
   */
  description?: string;

  /**
   * Determina o icone
   */
  icon?: ReactNode;

  /**
   * Determina o tamanho do icone
   */
  size?: 'small' | 'large';

  /**
   * Determina o tamanho do modal
   */
  sizeModal?: 'small' | 'large';

  /**
   * Determina se os botões estarão alinhados em linha ou coluna
   */
  direction?: 'row' | 'column';

  /**
   * Determina se o botão será largura total
   */
  fullWidth?: boolean;

  /**
   * Determina se o texto estará centralizado ou alinhado a esquerda
   */
  align?: 'center' | 'left';

  /**
   * Determina o conteudo interno do modal
   */
  children?: ReactNode;

  /**
   * Determina o texto do botão outlined
   */
  outlinedButton?: string;

  /**
   * Determina o texto do botão contained
   */
  containedButton?: string;

  /**
   * Determina se o modal está aberto
   */
  open: boolean;

  /**
   * Determina a ação de feixar o modal
   */
  onClose?: () => void;
}

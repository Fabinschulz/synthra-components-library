import { ReactNode } from 'react';

export interface DrawerProps {
  /**
   * Determina o titulo do drawer
   */
  title?: string;

  /**
   * Determina a descrição do drawer
   */
  description?: string;

  /**
   * Determina os componentes que irão compor o drawer
   */
  children?: ReactNode;

  /**
   * Determina se o drawer esta aberto
   */
  open: boolean;

  /**
   * Onde o menu estará ancorado
   */
  onClose?: () => void;

  /**
   * Determina por qual lado o drawer será aberto
   */
  anchor: 'left' | 'right' | 'top' | 'bottom';

  /**
   * Controla a largura do segundo drawer.
   * Quando definido como true, o segundo drawer terá uma largura menor.
   * Quando definido como false, o segundo drawer terá a largura padrão.
   */
  toggleDrawer?: boolean;
}

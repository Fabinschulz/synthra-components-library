import { ReactNode } from 'react';

export interface MenuProps {
  /**
   * Determina o titulo do avatar
   */
  avatarTitle?: string;

  /**
   * Determina o subtitulo do avatar
   */

  avatarSubtitle?: string;

  /*
   * Determina se o menu esta aberto
   */
  open?: boolean;

  /**
   * Items do menu
   */
  items?: MenuItems[];

  /**
   * Determina a logo do menu
   */
  logoIcon?: ReactNode;

  /**
   * Determina a largura do drawer
   */
  drawerWidthMain?: (width: number) => void;

  /**
   * Determina evento de logout
   */
  onClickLogout?: () => void;

  /**
   * Determina quanto tempo após um click fora da área do menu para que ele seja retraído automaticamente
   */
  closeDelay?: number;

  /**
   * Determina se as informações estão carregando
   */
  isLoading?: boolean;

  /**
   * Determina se o menu irá fechar de forma automática ao clicar fora
   */
  activateAutoOutsideMenu: boolean;
}

export interface MenuItems {
  /**
   * Determina o titulo do item de menu
   */
  title?: string;

  /**
   * Link que será redirecionado
   */
  href: string;

  /**
   * Determina o icone que será exibido no menu
   */
  icon?: ReactNode;

  /**
   * Determina se o item esta ativo
   */
  active?: boolean;

  /**
   * Determina os items de submenu
   */
  submenu?: MenuAccordionItems[];
}

export interface MenuAccordionItems {
  /**
   * Determina o titulo
   */
  title?: string;

  /**
   * Determina o redirect
   */
  href: string;

  /**
   * Determina se o item esta ativo
   */
  active?: boolean;

  /**
   * Determina os submenu dos menus
   */
  subSubmenu?: ISubmenuOptions[];
}

export interface ISubmenuOptions {
  /**
   * Determina o titulo
   */
  title?: string;

  /**
   * Determina o redirect
   */
  href: string;

  // /**
  //  * Determina se o item esta ativo
  //  */
  active?: boolean;
}

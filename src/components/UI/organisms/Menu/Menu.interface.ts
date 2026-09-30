import { ReactNode } from 'react';

export interface MenuLabels {
  /** @default 'Menu' */
  menu?: string;

  /** @default 'Conta' */
  account?: string;

  /** @default 'Sair' */
  logout?: string;

  /** Nome acessível do botão que expande o menu. @default 'Expandir menu' */
  expand?: string;

  /** Nome acessível do botão que recolhe o menu. @default 'Recolher menu' */
  collapse?: string;
}

export interface MenuProps {
  /**
   * Determina o titulo do avatar
   */
  avatarTitle?: string;

  /**
   * Determina o subtitulo do avatar
   */
  avatarSubtitle?: string;

  /**
   * Controla se o menu está expandido. Use junto com `onOpenChange`.
   * Sem esta prop, o menu controla o próprio estado.
   */
  open?: boolean;

  /**
   * Estado inicial quando o menu não é controlado
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * Chamado quando o menu expande ou recolhe.
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Items do menu
   */
  items?: MenuItems[];

  /**
   * Determina a logo do menu
   */
  logoIcon?: ReactNode;

  /**
   * Recebe a largura ocupada pelo menu (270 expandido, 105 recolhido) para ajustar o layout.
   */
  drawerWidthMain?: (width: number) => void;

  /**
   * Determina evento de logout
   */
  onClickLogout?: () => void;

  /**
   * Determina quanto tempo após um click fora da área do menu para que ele seja retraído automaticamente
   * @default 200
   */
  closeDelay?: number;

  /**
   * Exibe skeletons no lugar dos itens enquanto carregam
   * @default false
   */
  skeleton?: boolean;

  /**
   * Determina se o menu irá fechar de forma automática ao clicar fora
   * @default false
   */
  activateAutoOutsideMenu?: boolean;

  /**
   * Textos exibidos pelo menu (títulos das seções, logout e nomes acessíveis).
   */
  labels?: MenuLabels;
}

export interface MenuItems {
  /**
   * Determina o titulo do item de menu
   */
  title?: string;

  /**
   * Link que será redirecionado (usa o LinkComponent do tema)
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

  /**
   * Determina se o item esta ativo
   */
  active?: boolean;
}

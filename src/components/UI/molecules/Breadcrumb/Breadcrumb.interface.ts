import { BreadcrumbsProps as MuiBreadcrumb } from '@mui/material';

export interface BreadcrumbLink {
  url: string;
  title: string;
}

export interface BreadcrumbProps extends MuiBreadcrumb {
  /**
   * Define os links do breadcrumb. O último item representa a página atual e é renderizado como
   * texto com `aria-current="page"`.
   * @default []
   * @example <Breadcrumb links={[{ url: '/home', title: 'Home' }]} />
   */
  links?: BreadcrumbLink[];

  /**
   * Determina se o skeleton do breadcrumb deve ser exibido.
   * @default false
   * @example <Breadcrumb skeleton />
   */
  skeleton?: boolean;
}

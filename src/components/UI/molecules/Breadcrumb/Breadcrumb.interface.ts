import { BreadcrumbsProps as MuiBreadcrumb } from '@mui/material';

export interface BreadcrumbProps extends MuiBreadcrumb {
  /**
   * Define o separador entre os links
   * @default '/'
   * @type {string}
   * @example <Breadcrumb separator=">" />
   * @see BreadcrumbProps
   */
  separator?: string;

  /**
   * Define os links do breadcrumb
   * @default []
   * @type {{ url: string, title: string }[]}
   * @example <Breadcrumb links={[{ url: '/home', title: 'Home' }]} />
   * @see BreadcrumbProps
   */
  links?: {
    url: string;
    title: string;
  }[];
}

import { SxProps, Theme } from '@mui/material/styles';

export interface AvatarProps {
  /**
   * Imagem do avatar
   * @default ''
   * @type {string}
   */
  imageSrc?: string;

  /**
   * Título do avatar
   * @default ''
   * @type {string}
   * @example 'John Doe'
   */
  title: string;

  /**
   * Subtítulo do avatar
   * @default ''
   * @type {string}
   * @example 'Software Engineer'
   */
  subtitle?: string;

  /**
   * Texto alternativo para a imagem do avatar
   * @default ''
   * @type {string}
   * @example 'John Doe'
   */
  altText?: string;

  /**
   * Mostrar um texto alternativo ao lado do avatar
   * @default false
   * @type {boolean}
   */
  showText?: boolean;

  /**
   * Estilos customizados
   * @type {SxProps<Theme
   * @default {}
   * @example { mt: 2 }
   * @see https://mui.com/system/the-sx-prop/
   */
  sx?: SxProps<Theme>;

  /**
   * Determina se o skeleton do avatar deve ser exibido.
   * @default false
   * @example <Avatar skeleton />
   */
  skeleton?: boolean;
}

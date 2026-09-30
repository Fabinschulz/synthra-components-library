import type { ReactNode } from 'react';
import ThemeRegistry from './ThemeRegistry';
import type { ThemeRegistryProps } from './ThemeRegistry';

type GlobalLayoutContainerProps = Readonly<
  Omit<ThemeRegistryProps, 'children'> & {
    children: ReactNode;

    /** @default 'pt-BR' */
    lang?: string;
  }
>;

const GlobalLayoutContainer = ({ children, lang = 'pt-BR', ...registryProps }: GlobalLayoutContainerProps) => {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <ThemeRegistry {...registryProps}>{children}</ThemeRegistry>
      </body>
    </html>
  );
};

export default GlobalLayoutContainer;

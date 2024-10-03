import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const DynamicTheme = dynamic(() => import('@/utils/configs/mui/theme-registry'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;
const GlobalTagsContainer = ({ children }: RootLayoutProps) => {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <DynamicTheme>{children}</DynamicTheme>
      </body>
    </html>
  );
};

export default GlobalTagsContainer;

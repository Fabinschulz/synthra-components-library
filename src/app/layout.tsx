import type { Metadata } from 'next';
import './globals.css';
import { GlobalTagsContainer } from '@/components';

export const metadata: Metadata = {
  keywords: ['libs', 'components', 'free', 'tech', 'react hooks', 'validation form with yup'],
  title: 'Free tech - Biblioteca de componentes',
  description: `Biblioteca de componentes free-tech para você usar em seus projetos.`,
  icons: { icon: '' }
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;
export default function RootLayout({ children }: RootLayoutProps) {
  return <GlobalTagsContainer>{children}</GlobalTagsContainer>;
}

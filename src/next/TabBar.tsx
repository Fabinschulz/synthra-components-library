'use client';
import { usePathname } from 'next/navigation';
import { TabBar as BaseTabBar } from '../components/UI/molecules/TabBar';
import type { TabBarProps } from '../components/UI/molecules/TabBar';

export const TabBar = (props: Omit<TabBarProps, 'pathname'>) => {
  const pathname = usePathname() ?? '';
  return <BaseTabBar {...props} pathname={pathname} />;
};

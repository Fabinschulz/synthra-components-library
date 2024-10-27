import { TabBarProps } from './TabBar.interface';

export const tabBarMock: TabBarProps = {
  tabs: [
    {
      label: 'Produto',
      href: '#'
    },
    {
      label: 'Categorias',
      href: '#'
    },
    {
      label: 'Marcas',
      href: '#'
    }
  ],

  variant: 'scrollable',
  children: <p>Children</p>
};

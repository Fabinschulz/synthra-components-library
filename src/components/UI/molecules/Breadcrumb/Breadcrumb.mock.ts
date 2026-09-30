import { BreadcrumbProps } from './Breadcrumb.interface';

export const breadcrumbMock: BreadcrumbProps = {
  separator: '/',
  links: [
    {
      url: '#',
      title: 'Home'
    },
    {
      url: '#',
      title: 'Página anterior'
    },
    {
      url: '#',
      title: 'Página atual'
    }
  ],
  skeleton: false
};

export const breadcrumbWithSkeleton: BreadcrumbProps = {
  skeleton: true
};

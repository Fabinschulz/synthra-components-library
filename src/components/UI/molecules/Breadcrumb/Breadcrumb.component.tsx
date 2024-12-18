import type { BreadcrumbProps } from './Breadcrumb.interface';
import type { FunctionComponent } from 'react';
import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import { StyledLink } from './Breadcrumb.styled';
import { BreadcrumbSkeleton } from './Breadcrumb.skeleton';
import { activeTheme } from '@/utils';

const theme = activeTheme();
const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({
  separator,
  links,
  isLoading = false
}) => {
  return (
    <BreadcrumbSkeleton isLoading={isLoading}>
      <MuiBreadcrumbs aria-label="breadcrumb" separator={separator}>
        {links?.map((link, key) => (
          <StyledLink
            key={key}
            href={link.url}
            color={links.length - 1 === key ? theme.palette.primary.main : 'inherit'}
          >
            {link.title}
          </StyledLink>
        ))}
      </MuiBreadcrumbs>
    </BreadcrumbSkeleton>
  );
};

export default Breadcrumb;

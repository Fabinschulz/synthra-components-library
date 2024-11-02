import type { BreadcrumbProps } from './Breadcrumb.interface';
import type { FunctionComponent } from 'react';
import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StyledLink } from './Breadcrumb.styled';

const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({ separator, links }) => {
  const theme = useTheme();
  return (
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
  );
};

export default Breadcrumb;

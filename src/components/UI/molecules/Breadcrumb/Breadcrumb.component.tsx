'use client';
import type { BreadcrumbProps } from './Breadcrumb.interface';
import type { FunctionComponent } from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material';
import { StyledLink } from './Breadcrumb.styled';
import { BreadcrumbSkeleton } from './Breadcrumb.skeleton';

const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({
  links,
  skeleton = false,
  ...props
}) => {
  return (
    <BreadcrumbSkeleton skeleton={skeleton}>
      <MuiBreadcrumbs aria-label="breadcrumb" {...props}>
        {links?.map((link, index) =>
          index === links.length - 1 ? (
            <Typography
              key={`${link.url}-${index}`}
              aria-current="page"
              sx={{ fontSize: 'inherit', color: 'primary.main' }}
            >
              {link.title}
            </Typography>
          ) : (
            <StyledLink key={`${link.url}-${index}`} href={link.url} color="inherit">
              {link.title}
            </StyledLink>
          )
        )}
      </MuiBreadcrumbs>
    </BreadcrumbSkeleton>
  );
};

export default Breadcrumb;

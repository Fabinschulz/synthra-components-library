import React from 'react';
import { Grid2, Skeleton } from '@mui/material';

type BreadcrumbSkeletonProps = {
  isLoading: boolean;
  children: React.ReactNode;
};

export const BreadcrumbSkeleton: React.FC<BreadcrumbSkeletonProps> = ({ isLoading, children }) => {
  if (!isLoading) return <>{children}</>;

  const borderSx = {
    borderRadius: '4px'
  };

  return (
    <Grid2 container spacing={1}>
      {[...Array(3)].map((_, index) => (
        <React.Fragment key={index}>
          <Grid2>
            <Skeleton variant="text" width={100} height={16} animation="wave" sx={borderSx} />
          </Grid2>
          {index < 2 && (
            <Grid2>
              <Skeleton variant="text" width={16} height={16} animation="wave" sx={borderSx} />
            </Grid2>
          )}
        </React.Fragment>
      ))}
    </Grid2>
  );
};

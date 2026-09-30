'use client';
import React from 'react';
import { Grid, Skeleton } from '@mui/material';

type BreadcrumbSkeletonProps = {
  skeleton: boolean;
  children: React.ReactNode;
};

export const BreadcrumbSkeleton: React.FC<BreadcrumbSkeletonProps> = ({ skeleton, children }) => {
  if (!skeleton) return <>{children}</>;

  const borderSx = {
    borderRadius: '4px'
  };

  return (
    <Grid container spacing={1}>
      {[...Array(3)].map((_, index) => (
        <React.Fragment key={index}>
          <Grid>
            <Skeleton variant="text" width={100} height={16} animation="wave" sx={borderSx} />
          </Grid>
          {index < 2 && (
            <Grid>
              <Skeleton variant="text" width={16} height={16} animation="wave" sx={borderSx} />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

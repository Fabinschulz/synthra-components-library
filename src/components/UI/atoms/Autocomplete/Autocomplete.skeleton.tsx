'use client';
import React from 'react';
import { Box, Skeleton } from '@mui/material';

type AutocompleteSkeletonProps = {
  skeleton: boolean;
  children: React.ReactNode;
};

export const AutocompleteSkeleton: React.FC<AutocompleteSkeletonProps> = ({
  skeleton,
  children
}) => {
  if (!skeleton) return <>{children}</>;

  return (
    <Box sx={{ width: '100%' }}>
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{
          borderRadius: '4px',
          height: '56px'
        }}
      />
    </Box>
  );
};

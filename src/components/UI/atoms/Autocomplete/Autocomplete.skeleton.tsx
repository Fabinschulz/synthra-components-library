import React from 'react';
import { Box, Skeleton } from '@mui/material';

type AutocompleteSkeletonProps = {
  isLoading: boolean;
  children: React.ReactNode;
};

export const AutocompleteSkeleton: React.FC<AutocompleteSkeletonProps> = ({
  isLoading,
  children
}) => {
  if (!isLoading) return <>{children}</>;

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

import React from 'react';
import { Box, Skeleton } from '@mui/material';

type TextFielSkeletonProps = {
  isLoading: boolean;
  children: React.ReactNode;
};

export const TextFieldSkeleton: React.FC<TextFielSkeletonProps> = ({ isLoading, children }) => {
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

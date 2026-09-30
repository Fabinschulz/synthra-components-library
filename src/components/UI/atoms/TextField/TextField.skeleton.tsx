'use client';
import React from 'react';
import { Box, Skeleton } from '@mui/material';

type TextFielSkeletonProps = {
  skeleton: boolean;
  children: React.ReactNode;
};

export const TextFieldSkeleton: React.FC<TextFielSkeletonProps> = ({ skeleton, children }) => {
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

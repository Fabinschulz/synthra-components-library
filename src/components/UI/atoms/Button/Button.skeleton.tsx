'use client';
import React from 'react';
import { Skeleton, Box } from '@mui/material';

type ButtonSkeletonProps = {
  skeleton: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
};

const ButtonSkeleton: React.FC<ButtonSkeletonProps> = ({ skeleton, children, fullWidth }) => {
  if (!skeleton) return <>{children}</>;

  return (
    <Box
      sx={{
        display: 'inline-block',
        borderRadius: '4px',
        overflow: 'hidden'
      }}
    >
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{
          height: 40,
          width: fullWidth ? '100%' : 100
        }}
      />
    </Box>
  );
};

export default ButtonSkeleton;

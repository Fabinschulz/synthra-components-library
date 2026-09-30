import React from 'react';
import { Box, Skeleton } from '@mui/material';

type AvatarSkeletonProps = {
  isLoading: boolean;
  showText?: boolean;
  children: React.ReactNode;
};

const AvatarSkeleton: React.FC<AvatarSkeletonProps> = ({
  isLoading,
  showText = true,
  children
}) => {
  if (!isLoading) return <>{children}</>;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Skeleton variant="circular" width={40} height={40} />

      {showText && (
        <Box sx={{ ml: 2 }}>
          <Skeleton variant="text" width={120} height={20} />
          <Skeleton variant="text" width={80} height={16} />
        </Box>
      )}
    </Box>
  );
};

export default AvatarSkeleton;

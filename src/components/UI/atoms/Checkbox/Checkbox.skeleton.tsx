import React from 'react';
import { Box, Skeleton } from '@mui/material';

type CheckboxSkeletonProps = {
  isLoading: boolean;
  children: React.ReactNode;
};

const CheckboxSkeleton: React.FC<CheckboxSkeletonProps> = ({ isLoading, children }) => {
  if (!isLoading) return <>{children}</>;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Skeleton
        variant="rectangular"
        animation="wave"
        width={20}
        height={20}
        sx={{
          marginRight: '8px',
          borderRadius: '6px'
        }}
      />
      <Skeleton variant="text" animation="wave" width={100} height={20} />
    </Box>
  );
};

export default CheckboxSkeleton;

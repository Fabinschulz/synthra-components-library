'use client';
import type { FunctionComponent } from 'react';
import type { LoadingBarProps } from './LoadingBar.interface';

import { Box, LinearProgress } from '@mui/material';

export const LoadingBar: FunctionComponent<LoadingBarProps> = ({ ...props }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress {...props} />
    </Box>
  );
};

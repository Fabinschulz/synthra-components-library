'use client';
import type { FunctionComponent } from 'react';
import type { LoadingBarProps } from './LoadingBar.interface';

import { Box, LinearProgress as LinearProgressMui } from '@mui/material';

export const LoadingBar: FunctionComponent<LoadingBarProps> = ({ ...props }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressMui {...props} />
    </Box>
  );
};

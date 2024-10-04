'use client';
import type { FunctionComponent } from 'react';
import type { DividerProps } from './Divider.interface';

import { Divider as MuiDivider } from '@mui/material';

export const Divider: FunctionComponent<DividerProps> = ({ ...props }) => {
  return <MuiDivider {...props} />;
};

'use client';
import type { FunctionComponent } from 'react';
import type { TypographyProps } from './Typography.interface';
import { Typography as MuiTypography } from '@mui/material';

const Typography: FunctionComponent<TypographyProps> = ({ fontFamily, fontWeight, sx, ...props }) => {
  return (
    <MuiTypography sx={[{ fontFamily, fontWeight }, ...(Array.isArray(sx) ? sx : [sx])]} {...props} />
  );
};
export default Typography;

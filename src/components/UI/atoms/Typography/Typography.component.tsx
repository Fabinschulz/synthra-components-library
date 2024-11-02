import type { FunctionComponent } from 'react';
import type { TypographyProps } from './Typography.interface';
import { Typography as MuiTypography } from '@mui/material';

const Typography: FunctionComponent<TypographyProps> = ({ ...props }) => {
  return <MuiTypography {...props} />;
};
export default Typography;

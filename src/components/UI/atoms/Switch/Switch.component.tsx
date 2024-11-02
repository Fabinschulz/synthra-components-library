'use client';
import type { FunctionComponent } from 'react';
import type { SwitchProps } from './Switch.interface';

import { Switch as MuiSwitch } from '@mui/material';

const Switch: FunctionComponent<SwitchProps> = ({ ...props }) => {
  return <MuiSwitch {...props} />;
};
export default Switch;

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const EnergyIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 26" width="24" height="26" fill="none" {...props}>
      <path
        d="M12 1V2.2M12 23.8V25M23 7L21.9 7.6M2.1 18.4L1 19M1 7L2.1 7.6M21.9 18.4L23 19M19.6211 13C19.6211 16.9765 16.209 20.2 12 20.2C7.79106 20.2 4.37901 16.9765 4.37901 13C4.37901 9.02355 7.79106 5.8 12 5.8C16.209 5.8 19.6211 9.02355 19.6211 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

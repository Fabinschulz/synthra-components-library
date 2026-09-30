import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const WalletIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <path
        d="M23 5H5C2.79086 5 1 6.79086 1 9V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M23 5C23 2.79086 21.2091 1 19 1H11C8.79086 1 7 2.79086 7 5V5H23V5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M1 11L1 17L4 17C5.65685 17 7 15.6569 7 14V14C7 12.3431 5.65685 11 4 11L1 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

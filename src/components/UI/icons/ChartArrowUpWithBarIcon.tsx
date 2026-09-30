import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ChartArrowUpWithBarIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19 2H21C21.5523 2 22 2.44772 22 3V5M21 3C13.0585 9.39136 8.94212 11.1129 2 12M18 10V20C18 21.1046 18.8954 22 20 22C21.1046 22 22 21.1046 22 20V10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10ZM2 18L2 20C2 21.1046 2.89543 22 4 22C5.10457 22 6 21.1046 6 20L6 18C6 16.8954 5.10457 16 4 16C2.89543 16 2 16.8954 2 18ZM10 14V20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20V14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

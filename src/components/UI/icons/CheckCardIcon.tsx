import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const CheckCardIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M13.1 22L5 22C2.79086 22 0.999999 20.2091 0.999999 18L0.999999 6C0.999999 3.79086 2.79086 2 5 2L19 2C21.2091 2 23 3.79086 23 6L23 14.2222"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="5" cy="18" r="1" fill="currentColor" />
        <path
          d="M1 6L23 6L23 10L1 10L1 6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 20L18.7528 21.4023C19.1707 21.7366 19.7777 21.6826 20.1301 21.2799L23 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

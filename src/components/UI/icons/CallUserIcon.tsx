import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const CallUserIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M15 10.5V10C15 8.34315 16.3431 7 18 7M21 10.5V10C21 8.34315 19.6569 7 18 7M18 7C19.1046 7 20 6.10457 20 5C20 3.89543 19.1046 3 18 3C16.8954 3 16 3.89543 16 5C16 6.10457 16.8954 7 18 7ZM21 17.3541V19C21 20.1046 20.1046 21 19 21C10.1634 21 3 13.8366 3 5C3 3.89543 3.89543 3 5 3H6.64593C7.46374 3 8.19916 3.4979 8.50289 4.25722L9.31654 6.29136C9.70285 7.25714 9.28438 8.35781 8.35402 8.82299L8 9C8 9 8.5 11.5 10.5 13.5C12.5 15.5 15 16 15 16L15.177 15.646C15.6422 14.7156 16.7429 14.2971 17.7086 14.6835L19.7428 15.4971C20.5021 15.8008 21 16.5363 21 17.3541Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const StopWathCheckIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M12 22C7.30558 22 3.5 18.1944 3.5 13.5C3.5 8.80558 7.30558 5 12 5C16.6944 5 20.5 8.80558 20.5 13.5C20.5 14.0118 20.4548 14.5131 20.3681 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15 2.41406C14.0463 2.14433 13.04 2 12 2C10.96 2 9.95366 2.14433 9 2.41406"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14 20L15.7528 21.4023C16.1707 21.7366 16.7777 21.6826 17.1301 21.2799L20 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 14C13.5 14.8284 12.8284 15.5 12 15.5C11.1716 15.5 10.5 14.8284 10.5 14C10.5 13.1716 11.1716 12.5 12 12.5C12.8284 12.5 13.5 13.1716 13.5 14Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 12V9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

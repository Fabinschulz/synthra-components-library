import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UserBlockIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.64172 15.1238C7.93299 14.4077 9.41889 14 11 14C11.338 14 11.6717 14.0186 12 14.0549"
          stroke="currentColor"
          strokeWidth="1.5"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="3"
          cy="3"
          r="3"
          transform="matrix(1 0 0 -1 8 11)"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M19.3953 14.2501C19.7858 13.242 20 12.146 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C12.146 20 13.242 19.7858 14.2501 19.3953M19.3953 14.2501C20.9164 14.8163 22 16.2816 22 18C22 20.2091 20.2091 22 18 22C16.2816 22 14.8163 20.9164 14.2501 19.3953M19.3953 14.2501C18.9609 14.0884 18.4907 14 18 14C15.7909 14 14 15.7909 14 18C14 18.4907 14.0884 18.9609 14.2501 19.3953"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M20.5 15.5L15.5 20.5"
          stroke="currentColor"
          strokeWidth="1.5"
          stroke-linecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

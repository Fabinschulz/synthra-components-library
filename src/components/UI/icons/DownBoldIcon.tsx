import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const DownBoldIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 25" width="24" height="25" fill="none" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15 5L15 13L16.7962 13C17.6554 13 18.1146 14.0119 17.5488 14.6585L13.5052 19.2798C12.7083 20.1905 11.2917 20.1905 10.4948 19.2798L6.45119 14.6585C5.88543 14.0119 6.34461 13 7.20377 13L9 13L9 5C9 3.89543 9.89543 3 11 3L13 3C14.1046 3 15 3.89543 15 5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

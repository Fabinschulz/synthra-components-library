import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const RightBoldIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M5 9H13V7.20377C13 6.34461 14.0119 5.88543 14.6585 6.45119L19.2798 10.4948C20.1905 11.2917 20.1905 12.7083 19.2798 13.5052L14.6585 17.5488C14.0119 18.1146 13 17.6554 13 16.7962V15H5C3.89543 15 3 14.1046 3 13V11C3 9.89543 3.89543 9 5 9Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

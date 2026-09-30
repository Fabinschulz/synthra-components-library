import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const PixelGridRectangleIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 29 25" width="29" height="25" fill="none" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19 8V16M5 8V16M16 19H8M16 5L8 5M4 8H6C7.10457 8 8 7.10457 8 6V4C8 2.89543 7.10457 2 6 2H4C2.89543 2 2 2.89543 2 4V6C2 7.10457 2.89543 8 4 8ZM18 8H20C21.1046 8 22 7.10457 22 6V4C22 2.89543 21.1046 2 20 2H18C16.8954 2 16 2.89543 16 4V6C16 7.10457 16.8954 8 18 8ZM4 22H6C7.10457 22 8 21.1046 8 20V18C8 16.8954 7.10457 16 6 16H4C2.89543 16 2 16.8954 2 18V20C2 21.1046 2.89543 22 4 22ZM18 22H20C21.1046 22 22 21.1046 22 20V18C22 16.8954 21.1046 16 20 16H18C16.8954 16 16 16.8954 16 18V20C16 21.1046 16.8954 22 18 22Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

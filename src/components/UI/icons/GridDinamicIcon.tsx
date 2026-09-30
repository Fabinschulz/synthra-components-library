import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const GridDinamicIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

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
          d="M2 4C2 2.89543 2.89543 2 4 2H8C9.10457 2 10 2.89543 10 4V6C10 7.10457 9.10457 8 8 8H4C2.89543 8 2 7.10457 2 6V4Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M2 14C2 12.8954 2.89543 12 4 12H8C9.10457 12 10 12.8954 10 14V20C10 21.1046 9.10457 22 8 22H4C2.89543 22 2 21.1046 2 20V14Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M14 4C14 2.89543 14.8954 2 16 2H20C21.1046 2 22 2.89543 22 4V10C22 11.1046 21.1046 12 20 12H16C14.8954 12 14 11.1046 14 10V4Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M14 18C14 16.8954 14.8954 16 16 16H20C21.1046 16 22 16.8954 22 18V20C22 21.1046 21.1046 22 20 22H16C14.8954 22 14 21.1046 14 20V18Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

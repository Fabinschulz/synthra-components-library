import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const BackPackIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M15 5V4C15 2.89543 14.1046 2 13 2H11C9.89543 2 9 2.89543 9 4V5M11 10H13M5 16C10.6 13.3333 13.4 13.3333 19 16M9 22H15C17.2091 22 19 20.2091 19 18V11C19 7.68629 16.3137 5 13 5H11C7.68629 5 5 7.68629 5 11V18C5 20.2091 6.79086 22 9 22ZM19 12V20H20C21.1046 20 22 19.1046 22 18V15C22 13.3431 20.6569 12 19 12ZM5 12V20H4C2.89543 20 2 19.1046 2 18V15C2 13.3431 3.34315 12 5 12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

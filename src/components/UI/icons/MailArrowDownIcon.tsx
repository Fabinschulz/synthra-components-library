import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const MailArrowDownIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M22 6L20.7071 7.29289C20.3166 7.68342 19.6834 7.68342 19.2929 7.29289L18 6M20 2V7M6 13L8.2 14.65C9.26667 15.45 10.7333 15.45 11.8 14.65L14 13M5 22H15C16.6569 22 18 20.6569 18 19V11C18 9.34315 16.6569 8 15 8H5C3.34315 8 2 9.34315 2 11V19C2 20.6569 3.34315 22 5 22Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

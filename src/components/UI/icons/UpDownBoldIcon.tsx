import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UpDownBoldIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M9 19L9 11L7.20377 11C6.34461 11 5.88543 9.98808 6.45119 9.3415L10.4948 4.72017C11.2917 3.80952 12.7083 3.80952 13.5052 4.72017L17.5488 9.34149C18.1146 9.98808 17.6554 11 16.7962 11L15 11L15 19C15 20.1046 14.1046 21 13 21L11 21C9.89543 21 9 20.1046 9 19Z"
          stroke="#373737"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

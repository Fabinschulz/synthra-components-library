import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const LeftBoldIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

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
          d="M19 9H11V7.20377C11 6.34461 9.98808 5.88543 9.3415 6.45119L4.72017 10.4948C3.80952 11.2917 3.80952 12.7083 4.72017 13.5052L9.3415 17.5488C9.98808 18.1146 11 17.6554 11 16.7962V15H19C20.1046 15 21 14.1046 21 13V11C21 9.89543 20.1046 9 19 9Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const MailNegativeIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

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
          d="M22 4L18 4M6 11L8.2 12.65C9.26667 13.45 10.7333 13.45 11.8 12.65L14 11M5 20H15C16.6569 20 18 18.6569 18 17V9C18 7.34315 16.6569 6 15 6H5C3.34315 6 2 7.34315 2 9V17C2 18.6569 3.34315 20 5 20Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

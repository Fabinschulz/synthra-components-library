import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const MailPlusIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M20 3V7M22 5L18 5M6 12L8.8 14.1C9.51111 14.6333 10.4889 14.6333 11.2 14.1L14 12M5 21H15C16.6569 21 18 19.6569 18 18V10C18 8.34315 16.6569 7 15 7H5C3.34315 7 2 8.34315 2 10V18C2 19.6569 3.34315 21 5 21Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

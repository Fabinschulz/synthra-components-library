import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const EmailIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 22" width="24" height="24" fill="none" {...props}>
      <path
        d="M5.4 6.55556L9.55932 9.35644C11.0373 10.3517 12.9627 10.3517 14.4407 9.35644L18.6 6.55556M5.4 21H18.6C21.0301 21 23 19.0102 23 16.5556V5.44444C23 2.98985 21.0301 1 18.6 1H5.4C2.96995 1 1 2.98985 1 5.44444V16.5556C1 19.0102 2.96995 21 5.4 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

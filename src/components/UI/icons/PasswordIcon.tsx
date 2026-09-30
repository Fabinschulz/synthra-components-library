import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const PasswordIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 21 25" width="21" height="25" fill="none" {...props}>
      <path
        d="M15.25 7.9H5.75M15.25 7.9C17.8734 7.9 20 9.95949 20 12.5V19.4C20 21.9405 17.8734 24 15.25 24H5.75C3.12665 24 1 21.9405 1 19.4V12.5C1 9.95949 3.12665 7.9 5.75 7.9M15.25 7.9V5.6C15.25 3.05949 13.1234 1 10.5 1C7.87665 1 5.75 3.05949 5.75 5.6V7.9M10.5 17.1V14.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

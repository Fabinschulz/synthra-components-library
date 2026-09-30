import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const AvailableCashIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 26 26" width="26" height="26" fill="none" {...props}>
      <circle cx="13" cy="13" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M15 11C15 9.89543 14.1046 9 13 9C11.8954 9 11 9.89543 11 11C11 12.1046 11.8954 13 13 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M13 13C14.1046 13 15 13.8954 15 15C15 16.1046 14.1046 17 13 17C11.8954 17 11 16.1046 11 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M13 7.5V9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M13 17V18.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

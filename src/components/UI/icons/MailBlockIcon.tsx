import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const MailBlockIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <circle cx="18" cy="6" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M15 3L21 9" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M5.75 13L7.95 14.65C9.01667 15.45 10.4833 15.45 11.55 14.65L13.75 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.75 11.9536V19C18.75 21.0711 17.0711 22.75 15 22.75H5C2.92893 22.75 1.25 21.0711 1.25 19V11C1.25 8.92893 2.92893 7.25 5 7.25H12.1304C12.2425 7.77911 12.4244 8.28247 12.6659 8.75H5C3.75736 8.75 2.75 9.75736 2.75 11V19C2.75 20.2426 3.75736 21.25 5 21.25H15C16.2426 21.25 17.25 20.2426 17.25 19V11.9536C17.4957 11.9842 17.746 12 18 12C18.254 12 18.5043 11.9842 18.75 11.9536Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const MailFavoriteIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <path
        d="M6 13L8.2 14.65C9.26667 15.45 10.7333 15.45 11.8 14.65L14 13M18.2191 7.02391L16.365 4.70626C16.1287 4.41091 16 4.04394 16 3.6657V3.59099C16 2.71231 16.7123 2 17.591 2C18.0129 2 18.4176 2.16762 18.716 2.46599L19 2.75L19.284 2.46599C19.5824 2.16762 19.9871 2 20.409 2C21.2877 2 22 2.71231 22 3.59099V3.6657C22 4.04394 21.8713 4.41091 21.635 4.70626L19.7809 7.02391C19.3805 7.52432 18.6195 7.52432 18.2191 7.02391ZM5 22H15C16.6569 22 18 20.6569 18 19V11C18 9.34315 16.6569 8 15 8H5C3.34315 8 2 9.34315 2 11V19C2 20.6569 3.34315 22 5 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

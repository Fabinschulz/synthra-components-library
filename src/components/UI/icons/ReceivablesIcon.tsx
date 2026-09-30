import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ReceivablesIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <rect stroke="currentColor" fill="none" x="1" y="9" width="22" height="2" rx="1" />
      <path
        d="M20 21H4C2.34315 21 1 19.6569 1 18V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </SvgIcon>
  );
};

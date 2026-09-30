import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ReceiveIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 26" width="24" height="26" fill="none" {...props}>
      <rect
        x="1"
        y="9"
        width="22"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        stroke="currentColor"
        cx="1"
        cy="1"
        r="1"
        transform="matrix(1 0 0 -1 17 22)"
        fill="none"
      />
      <circle
        stroke="currentColor"
        cx="1"
        cy="1"
        r="1"
        transform="matrix(1 0 0 -1 5 14)"
        fill="none"
      />
      <circle
        cx="2"
        cy="2"
        r="2"
        transform="matrix(1 0 0 -1 10 19)"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M14 3.18767L12.7071 4.66527C12.3166 5.11158 11.6834 5.11158 11.2929 4.66526L10 3.18767M12 1V4.33053"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

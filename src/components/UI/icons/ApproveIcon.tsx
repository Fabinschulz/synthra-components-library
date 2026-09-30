import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ApproveIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 25 24" width="25" height="24" fill="none" {...props}>
      <path
        d="M5.52688 7.55556H3.26344C2.01338 7.55556 1 8.55048 1 9.77778V19.7778C1 21.0051 2.01338 22 3.26344 22H5.52688C6.77694 22 7.79032 21.0051 7.79032 19.7778V9.77778C7.79032 8.55048 6.77694 7.55556 5.52688 7.55556Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M16.7048 22H12.5561C11.6624 22 10.7887 21.7403 10.0451 21.2536L8.29428 20.1076C7.97943 19.9016 7.79032 19.5546 7.79032 19.1831V10.0728C7.79032 9.87949 7.84172 9.68947 7.93943 9.52158L12.3172 2H13.8209C16.0807 2 17.4285 4.47262 16.1751 6.31861L14.5806 8.66667H20.7354C22.208 8.66667 23.2884 10.0253 22.9313 11.4279L21.0965 18.6335C20.5927 20.612 18.782 22 16.7048 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

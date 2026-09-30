import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const TotalValueIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 25" width="24" height="25" fill="none" {...props}>
      <path
        d="M19.7376 19.4667H12.9502M19.7376 19.4667C20.9871 19.4667 22 20.4815 22 21.7333C22 22.9852 20.9871 24 19.7376 24H12.9502C11.7007 24 10.6878 22.9852 10.6878 21.7333C10.6878 20.4815 11.7007 19.4667 12.9502 19.4667M19.7376 19.4667C20.9871 19.4667 22 18.4518 22 17.2C22 15.9482 20.9871 14.9333 19.7376 14.9333H18.9834M12.9502 19.4667C11.7007 19.4667 10.6878 18.4518 10.6878 17.2C10.6878 15.9482 11.7007 14.9333 12.9502 14.9333H18.9834M12.5831 24H8.79252C4.15978 24 0.888507 19.4529 2.35351 15.0497L3.48473 11.6496C4.40857 8.87292 7.00227 7 9.92374 7H11.4519C14.3734 7 16.967 8.87292 17.8909 11.6497L18.9834 14.9333"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M13.3681 7L7.6319 7L5.70541 5.07155C3.81694 3.18115 6.02004 0.355571 8.77722 1.13182L10.0529 1.49097C10.3434 1.57274 10.6566 1.57274 10.9471 1.49097L12.2228 1.13182C14.98 0.355572 17.1831 3.18115 15.2946 5.07155L13.3681 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

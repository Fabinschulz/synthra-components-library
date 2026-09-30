import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UserStatusEditIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { fill = 'none' } = props;

  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <path
        d="M7 15C9.94583 13.6802 11.6997 13.6532 15 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill}
      />
      <circle
        cx="3"
        cy="3"
        r="3"
        transform="matrix(1 0 0 -1 8 11)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill={fill}
      />
      <path
        d="M19.777 13C19.9229 12.3568 20 11.6874 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C11.6874 20 12.3568 19.9229 13 19.777"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill}
      />
      <path d="M18 16V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill={fill} />
      <path
        d="M20 18L16 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill={fill}
      />
    </SvgIcon>
  );
};

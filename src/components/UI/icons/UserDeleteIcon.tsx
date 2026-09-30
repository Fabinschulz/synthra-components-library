import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UserDeleteIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 15C9.94583 13.6802 11.6997 13.6532 15 15"
          stroke={htmlColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="3"
          cy="3"
          r="3"
          transform="matrix(1 0 0 -1 8 11)"
          stroke={htmlColor}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M19.777 13C19.9229 12.3568 20 11.6874 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C11.6874 20 12.3568 19.9229 13 19.777"
          stroke={htmlColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.4142 16.5858L16.5858 19.4142"
          stroke={htmlColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M19.4142 19.4142L16.5858 16.5858"
          stroke={htmlColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

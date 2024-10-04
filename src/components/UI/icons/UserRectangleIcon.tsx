import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UserRectangleIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          cx="3"
          cy="3"
          r="3"
          transform="matrix(1 0 0 -1 9 12)"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M18.9989 21.8743C20.7247 21.4306 22 19.8642 22 18V6C22 3.79086 20.2091 2 18 2H6C3.79086 2 2 3.79086 2 6V18C2 19.8642 3.27532 21.4306 5.00111 21.8743M18.9989 21.8743C18.6796 21.9563 18.3449 22 18 22H6C5.6551 22 5.32039 21.9563 5.00111 21.8743M18.9989 21.8743C18.9318 18.0663 15.824 15 12 15C8.17601 15 5.06818 18.0663 5.00111 21.8743"
          stroke={htmlColor}
          strokeWidth="2"
        />
      </svg>
    </SvgIcon>
  );
};

UserRectangleIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UserAddIcon: FunctionComponent<SvgIconProps> = (props) => {
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
        <ellipse
          cx="10"
          cy="17.5"
          rx="7"
          ry="3.5"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="7" r="4" stroke={htmlColor} strokeWidth="2" strokeLinejoin="round" />
        <path d="M21 11H17" stroke={htmlColor} strokeWidth="2" strokeLinecap="round" />
        <path d="M19 9L19 13" stroke={htmlColor} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </SvgIcon>
  );
};

UserAddIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

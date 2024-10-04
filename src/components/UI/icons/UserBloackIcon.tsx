import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UserBloackIcon: FunctionComponent<SvgIconProps> = (props) => {
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
        <circle cx="19" cy="11" r="3" stroke={htmlColor} strokeWidth="2" />
        <path d="M20.5 9.5L17.5 12.5" stroke={htmlColor} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </SvgIcon>
  );
};

UserBloackIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

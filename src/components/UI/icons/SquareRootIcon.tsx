import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const SquareRootIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M3 13H4.5C4.81476 13 5.11115 13.1482 5.3 13.4L6.81141 15.4152C7.30372 16.0716 8.33346 15.8885 8.56923 15.1026L10.7862 7.71265C10.9131 7.28967 11.3024 7 11.744 7H21M18.1213 11.7574L13.8787 16M18.1213 16L13.8787 11.7574"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

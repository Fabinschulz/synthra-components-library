import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const LogoutIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        d="M5 8L1 12M1 12L5 16M1 12H14"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M10 18V18C10 19.6288 10 20.4433 10.2956 21.0589C10.6251 21.7452 11.2032 22.2805 11.9127 22.5564C12.5492 22.8039 13.3612 22.7414 14.9853 22.6165L17.4602 22.4261C20.0883 22.224 21.4023 22.1229 22.2012 21.2603C23 20.3976 23 19.0797 23 16.4438L23 7.55619C23 4.92032 23 3.60239 22.2012 2.73974C21.4023 1.8771 20.0883 1.77602 17.4602 1.57386L14.9853 1.38348C13.3612 1.25856 12.5492 1.19609 11.9127 1.44358C11.2032 1.71949 10.6251 2.25484 10.2956 2.94114C10 3.55674 10 4.37116 10 6V6"
        stroke={htmlColor}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </SvgIcon>
  );
};

LogoutIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

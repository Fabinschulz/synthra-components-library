import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const AlertIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <circle cx="14.5" cy="18.5" r="1.5" fill="#373737" />
      <path
        d="M14.4999 8.66663V15.0555M4.90986 24H24.0901C26.3057 24 27.7061 21.6275 26.6302 19.697L17.04 2.48979C15.9329 0.503402 13.0671 0.503406 11.96 2.48979L2.36984 19.697C1.29388 21.6275 2.69432 24 4.90986 24Z"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

AlertIcon.defaultProps = {
  viewBox: '0 0 29 25',
  width: '29',
  height: '25',
  fill: 'none'
};

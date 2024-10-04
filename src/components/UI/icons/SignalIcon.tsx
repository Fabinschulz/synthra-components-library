import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const SignalIcon: FunctionComponent<SvgIconProps> = (props) => {
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
        <path
          d="M22 4V20M18 7V20M14 10V20M9.99996 13V20M5.99996 13V20M5.99996 13L4.49874 11.1235C3.49172 9.86469 4.38793 8 5.99996 8C7.61199 8 8.50821 9.86469 7.50118 11.1235L5.99996 13Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

SignalIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

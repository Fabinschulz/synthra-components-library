import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const DigitalAccountIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        d="M17 15.3H11V6.5H17M17 15.3C18.1046 15.3 19 14.315 19 13.1V8.7C19 7.48497 18.1046 6.5 17 6.5M17 15.3V20.8C17 22.015 16.1046 23 15 23H7C5.89543 23 5 22.015 5 20.8V3.2C5 1.98497 5.89543 1 7 1H15C16.1046 1 17 1.98497 17 3.2V6.5"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 19C12 19.5523 11.5523 20 11 20C10.4477 20 10 19.5523 10 19C10 18.4477 10.4477 18 11 18C11.5523 18 12 18.4477 12 19Z"
        fill={htmlColor}
      />
      <path
        d="M19 10L11 10"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

DigitalAccountIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

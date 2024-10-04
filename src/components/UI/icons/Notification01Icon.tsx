import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const Notification01Icon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        d="M11.0717 4.06949C8.26334 4.49348 6.01734 6.81294 5.67964 9.79403L5.33476 12.8385C5.24906 13.595 4.94246 14.3069 4.45549 14.88C3.42209 16.0964 4.26081 18 5.83014 18H18.1699C19.7392 18 20.5779 16.0964 19.5445 14.88C19.0575 14.3069 18.7509 13.595 18.6652 12.8385L18.4373 10.8267M15 20C14.5633 21.1652 13.385 22 12 22C10.615 22 9.43668 21.1652 9 20M20 5C20 6.65685 18.6569 8 17 8C15.3431 8 14 6.65685 14 5C14 3.34315 15.3431 2 17 2C18.6569 2 20 3.34315 20 5Z"
        stroke={htmlColor}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </SvgIcon>
  );
};

Notification01Icon.defaultProps = {
  viewBox: '0 0 22 24',
  width: '22',
  height: '24'
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const WiFiSignalIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="19" r="1" fill={htmlColor} />
      <path
        d="M21.4451 7.66592C18.9552 5.38903 15.6398 4 12 4C8.36016 4 5.04475 5.38903 2.55493 7.66592M18.2389 11.5134C16.621 9.95692 14.4223 9 12 9C9.57773 9 7.37897 9.95692 5.76112 11.5134M15.0196 15.3765C14.2862 14.5332 13.2054 14 12 14C10.7946 14 9.71378 14.5332 8.98043 15.3765"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

WiFiSignalIcon.defaultProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  height: '24px',
  width: '24px'
};

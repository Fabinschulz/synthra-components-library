import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const BluetoothIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        d="M6 8L16.8857 15.2571C17.4418 15.6279 17.4847 16.4295 16.9711 16.8574L13.6402 19.6332C12.9889 20.176 12 19.7128 12 18.865V5.13504C12 4.2872 12.9889 3.82405 13.6402 4.36682L16.9711 7.14262C17.4847 7.57055 17.4418 8.37211 16.8857 8.74289L6 16"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M18.4142 10.5858L19.8284 12L18.4142 13.4142L17 12L18.4142 10.5858Z"
        stroke={htmlColor}
      />
      <path
        d="M5.58579 10.5858L7 12L5.58579 13.4142L4.17157 12L5.58579 10.5858Z"
        stroke={htmlColor}
      />
    </SvgIcon>
  );
};

BluetoothIcon.defaultProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  height: '24px',
  width: '24px'
};

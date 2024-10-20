import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UserNetworkIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737', fill = 'none' } = props;

  return (
    <SvgIcon {...props}>
      <path
        d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488"
        stroke={htmlColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill={fill}
      />
      <circle
        cx="3"
        cy="3"
        r="3"
        transform="matrix(1 0 0 -1 9 12)"
        stroke={htmlColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill={fill}
      />
    </SvgIcon>
  );
};

UserNetworkIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

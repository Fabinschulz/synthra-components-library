import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UserBloackIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737', fill = 'none' } = props;

  return (
    <SvgIcon {...props}>
      <ellipse
        cx="10"
        cy="17.5"
        rx="7"
        ry="3.5"
        stroke={htmlColor}
        stroke-width="1.5"
        stroke-linejoin="round"
        fill={fill}
      />
      <circle
        cx="10"
        cy="7"
        r="4"
        stroke={htmlColor}
        stroke-width="1.5"
        stroke-linejoin="round"
        fill={fill}
      />
      <circle cx="19" cy="11" r="3" stroke={htmlColor} stroke-width="1.5" fill={fill} />
      <path
        d="M20.5 9.5L17.5 12.5"
        stroke={htmlColor}
        stroke-width="1.5"
        stroke-linecap="round"
        fill={fill}
      />
    </SvgIcon>
  );
};

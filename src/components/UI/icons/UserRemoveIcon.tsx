import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UserRemoveIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737', fill = 'none' } = props;

  return (
    <SvgIcon {...props}>
      <ellipse
        cx="10"
        cy="17.5"
        rx="7"
        ry="3.5"
        stroke={htmlColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill={fill}
      />
      <circle
        cx="10"
        cy="7"
        r="4"
        stroke={htmlColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill={fill}
      />
      <path d="M21 11H17" stroke={htmlColor} strokeWidth="1.5" stroke-linecap="round" />
    </SvgIcon>
  );
};

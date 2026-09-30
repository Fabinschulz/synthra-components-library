import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const LiquidateIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <rect
        x="21"
        y="3"
        width="4"
        height="14"
        rx="2"
        transform="rotate(90 21 3)"
        stroke={htmlColor}
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="21"
        y="12"
        width="4"
        height="14"
        rx="2"
        transform="rotate(90 21 12)"
        stroke={htmlColor}
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="17"
        y="7"
        width="5"
        height="14"
        rx="2.5"
        transform="rotate(90 17 7)"
        stroke={htmlColor}
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="18"
        y="16"
        width="5"
        height="14"
        rx="2.5"
        transform="rotate(90 18 16)"
        stroke={htmlColor}
        strokeWidth="2"
        fill="none"
      />
    </SvgIcon>
  );
};

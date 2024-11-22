import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const LightIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="5" stroke={htmlColor} strokeWidth="2" fill="none" />
      <path d="M12 2V4" stroke={htmlColor} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M12 20V22" stroke={htmlColor} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path
        d="M20.6602 7L18.9281 8"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M5.07178 16L3.33973 17"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M3.33984 7.00012L5.07189 8.00012"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M18.9282 16L20.6603 17"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

LightIcon.defaultProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  height: '24px',
  width: '24px'
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const PhoneIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <rect
        x="4"
        y="1"
        width="16"
        height="22"
        rx="3"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M11 20H13" stroke={htmlColor} strokeWidth="2" strokeLinecap="round" />
    </SvgIcon>
  );
};

PhoneIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

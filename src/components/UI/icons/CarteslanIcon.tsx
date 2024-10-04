import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const CarteslanIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M22 11L22 13" stroke={htmlColor} strokeWidth="2" strokeLinecap="round" />
        <path d="M2 11L2 13" stroke={htmlColor} strokeWidth="2" strokeLinecap="round" />
        <path
          d="M12 2V22M22 12L2 12M11 22H13M11 2H13M11 7.5H13M11 16.5H13M16.5 11V13M7.5 11V13M6 2L7 3M7 3L8 2M7 3V4M20 16L21 17M21 17L22 16M21 17L20 18M21 17L22 18"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

CarteslanIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

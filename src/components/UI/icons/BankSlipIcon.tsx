import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const BankSlipIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        d="M18 6L6 6"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 10L6 10"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 16L6 16"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 1H4C2.89543 1 2 1.89543 2 3V20.164C2 21.5465 3.36916 22.512 4.67143 22.0479L6.80148 21.2887C7.28553 21.1162 7.81741 21.1367 8.2868 21.3458L11.1861 22.6374C11.7042 22.8682 12.2958 22.8682 12.8139 22.6374L15.7132 21.3458C16.1826 21.1367 16.7145 21.1162 17.1985 21.2887L19.3286 22.0479C20.6308 22.512 22 21.5465 22 20.164V3C22 1.89543 21.1046 1 20 1Z"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

BankSlipIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

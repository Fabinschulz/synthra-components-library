import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const WalletArrowRightIcon: FunctionComponent<SvgIconProps> = (props) => {
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
        <path
          d="M20.4142 22L21.7071 20.7071C22.0976 20.3166 22.0976 19.6834 21.7071 19.2929L20.4142 18M16 20L21.4142 20"
          stroke={htmlColor}
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M22 15V6H6C3.79086 6 2 7.79086 2 10V18C2 20.2091 3.79086 22 6 22H13"
          stroke={htmlColor}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 6C22 3.79086 20.2091 2 18 2H12C9.79086 2 8 3.79086 8 6V6H22V6Z"
          stroke={htmlColor}
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M2 12L2 16L6 16C7.10457 16 8 15.1046 8 14V14C8 12.8954 7.10457 12 6 12L2 12Z"
          stroke={htmlColor}
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

WalletArrowRightIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const Time60Icon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M22 12V6C22 3.79086 20.2091 2 18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H8.88889"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect
          x="18"
          y="16"
          width="4"
          height="6"
          rx="2"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 7V12L9 13"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 16H14C12.8954 16 12 16.8954 12 18V19M12 19V20C12 21.1046 12.8954 22 14 22H14.5C15.3284 22 16 21.3284 16 20.5V20.5C16 19.6716 15.3284 19 14.5 19H12Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 12L20 10"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

Time60Icon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

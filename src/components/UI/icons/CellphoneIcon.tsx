import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const CellphoneIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="2"
          width="14"
          height="20"
          rx="3"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M11 19H13" stroke={htmlColor} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </SvgIcon>
  );
};

CellphoneIcon.defaultProps = {
  viewBox: '0 0 1080 1080',
  width: '1080',
  height: '1080',
  fill: 'none'
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const AlignBottomIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M2 20L22 20M4 20L4 6C4 4.89543 4.89543 4 6 4L8 4C9.10457 4 10 4.89543 10 6L10 20H4ZM14 20V12C14 10.8954 14.8954 10 16 10H18C19.1046 10 20 10.8954 20 12V20H14Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

AlignBottomIcon.defaultProps = {
  viewBox: '0 0 29 25',
  width: '29',
  height: '25',
  fill: 'none'
};

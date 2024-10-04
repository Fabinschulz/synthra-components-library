import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const AlignRightIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M20 2V22M20 4H6C4.89543 4 4 4.89543 4 6V8C4 9.10457 4.89543 10 6 10H20V4ZM20 14H12C10.8954 14 10 14.8954 10 16V18C10 19.1046 10.8954 20 12 20H20V14Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

AlignRightIcon.defaultProps = {
  viewBox: '0 0 29 25',
  width: '29',
  height: '25',
  fill: 'none'
};

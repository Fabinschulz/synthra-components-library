import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const AlignCenterIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M2 12H4M10 12H14M20 12H22M14 6L14 18C14 19.1046 14.8954 20 16 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4L16 4C14.8954 4 14 4.89543 14 6ZM4 9L4 15C4 16.1046 4.89543 17 6 17H8C9.10457 17 10 16.1046 10 15V9C10 7.89543 9.10457 7 8 7H6C4.89543 7 4 7.89543 4 9Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

AlignCenterIcon.defaultProps = {
  viewBox: '0 0 29 25',
  width: '29',
  height: '25',
  fill: 'none'
};

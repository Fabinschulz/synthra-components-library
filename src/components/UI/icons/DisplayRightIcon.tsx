import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const DisplayRightIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M2 5V19M22 10V14C22 15.6569 20.6569 17 19 17L9 17C7.34315 17 6 15.6569 6 14L6 10C6 8.34315 7.34315 7 9 7L19 7C20.6569 7 22 8.34314 22 10Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

DisplayRightIcon.defaultProps = {
  viewBox: '0 0 29 25',
  width: '29',
  height: '25',
  fill: 'none'
};

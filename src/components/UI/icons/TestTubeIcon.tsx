import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const TestTubeIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M7.99991 2H15.9999M7.99991 13H15.9999M9.99991 2H13.9999V7.52786C13.9999 7.83835 14.0722 8.14458 14.2111 8.42229L19.5527 19.1056C20.2176 20.4354 19.2506 22 17.7638 22H6.23598C4.74921 22 3.78222 20.4354 4.44712 19.1056L9.78877 8.42229C9.92762 8.14458 9.99991 7.83835 9.99991 7.52786V2Z"
          stroke="#373737"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

TestTubeIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

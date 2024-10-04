import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const LandscapeVerticalIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M7 6C7 4.34315 8.34315 3 10 3H14C15.6569 3 17 4.34315 17 6V18C17 19.6569 15.6569 21 14 21H10C8.34315 21 7 19.6569 7 18V6Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M17 7H19C20.1046 7 21 7.89543 21 9V15C21 16.1046 20.1046 17 19 17H17V7Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M7 17H5C3.89543 17 3 16.1046 3 15L3 9C3 7.89543 3.89543 7 5 7L7 7L7 17Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

LandscapeVerticalIcon.defaultProps = {
  viewBox: '0 0 29 25',
  width: '29',
  height: '25',
  fill: 'none'
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const GraphicWithBarIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M16 11C14.8954 11 14 11.8954 14 13V15C14 16.1046 14.8954 17 16 17C17.1046 17 18 16.1046 18 15V13C18 11.8954 17.1046 11 16 11Z"
          stroke={htmlColor}
          strokeWidth="2"
        />
        <path
          d="M8 7C6.89543 7 6 7.89543 6 9L6 15C6 16.1046 6.89543 17 8 17C9.10457 17 10 16.1046 10 15V9C10 7.89543 9.10457 7 8 7Z"
          stroke={htmlColor}
          strokeWidth="2"
        />
        <path
          d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z"
          stroke={htmlColor}
          strokeWidth="2"
        />
      </svg>
    </SvgIcon>
  );
};

GraphicWithBarIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

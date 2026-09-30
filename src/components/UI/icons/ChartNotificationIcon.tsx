import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ChartNotificationIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M22 10V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6C2 3.79086 3.79086 2 6 2H14M5 12H6C7.10457 12 8 11.1046 8 10V9C8 7.89543 8.89543 7 10 7C11.1046 7 12 7.89543 12 9V15C12 16.1046 12.8954 17 14 17C15.1046 17 16 16.1046 16 15V14C16 12.8954 16.8954 12 18 12H19M22 4.5C22 5.88071 20.8807 7 19.5 7C18.1193 7 17 5.88071 17 4.5C17 3.11929 18.1193 2 19.5 2C20.8807 2 22 3.11929 22 4.5Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

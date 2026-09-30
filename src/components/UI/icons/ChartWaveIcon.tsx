import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ChartWaveIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M6 12H7C8.10457 12 9 11.1046 9 10V9C9 7.89543 9.89543 7 11 7C12.1046 7 13 7.89543 13 9V15C13 16.1046 13.8954 17 15 17C16.1046 17 17 16.1046 17 15V14C17 12.8954 17.8954 12 19 12H20M2 2V17C2 19.2091 3.79086 21 6 21H22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

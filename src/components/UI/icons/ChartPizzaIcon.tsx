import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ChartPizzaIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M9 4.22301C4.99202 5.13247 2 8.71682 2 13C2 17.9706 6.02944 22 11 22C15.2832 22 18.8675 19.008 19.777 15M13.9872 2.19744C17.9158 2.98955 21.0104 6.08418 21.8025 10.0128C22.0209 11.0955 21.1046 12 20 12H14C12.8954 12 12 11.1046 12 9.99999V3.99999C12 2.89542 12.9045 1.97913 13.9872 2.19744Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ChartArrowDownWithBarIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M19 12H21C21.5523 12 22 11.5523 22 11V9M21 11C13.0585 4.60864 8.94212 2.88706 2 2M6 10L6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20L2 10C2 8.89543 2.89543 8 4 8C5.10457 8 6 8.89543 6 10ZM22 18V20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20V18C18 16.8954 18.8954 16 20 16C21.1046 16 22 16.8954 22 18ZM14 14V20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20V14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

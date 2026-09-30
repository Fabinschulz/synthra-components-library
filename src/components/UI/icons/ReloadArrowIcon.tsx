import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ReloadArrowIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 25" width="24" height="25" fill="none" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14.8571 2L16.0352 5.09076C14.8506 4.39741 13.4717 4 12 4C7.58172 4 4 7.58172 4 12C4 13.4571 4.38958 14.8233 5.07026 16M9.14286 22L7.96473 18.9092C9.14936 19.6026 10.5283 20 12 20C16.4183 20 20 16.4183 20 12C20 10.5429 19.6104 9.17669 18.9297 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

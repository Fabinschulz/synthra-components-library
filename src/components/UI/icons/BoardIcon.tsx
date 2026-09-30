import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const BoardIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M7 7H17M7 12H12M16 17L19 22M8 17L5 22M12 17V20M19 2L5 2C3.34315 2 2 3.34315 2 5L2 14C2 15.6569 3.34315 17 5 17L19 17C20.6569 17 22 15.6569 22 14L22 5C22 3.34315 20.6569 2 19 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const PlayIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M19.4845 14.6485L7.50009 21.5936C5.49492 22.7556 3 21.2873 3 18.9451V5.05487C3 2.71273 5.49492 1.24439 7.50009 2.40641L19.4845 9.35154C21.5052 10.5226 21.5052 13.4774 19.4845 14.6485Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

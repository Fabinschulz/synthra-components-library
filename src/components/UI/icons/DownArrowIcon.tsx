import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const DownArrowIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M15.5179 7L8.48207 7C6.93849 7 5.97675 8.67443 6.75451 10.0077L10.2724 16.0385C11.0442 17.3615 12.9558 17.3615 13.7276 16.0385L17.2455 10.0077C18.0232 8.67443 17.0615 7 15.5179 7Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

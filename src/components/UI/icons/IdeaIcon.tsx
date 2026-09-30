import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const IdeaIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M8 18H16M8 18C8 20.2091 9.79086 22 12 22C14.2091 22 16 20.2091 16 18M8 18V15.7887C8 15.1349 7.66659 14.5363 7.19153 14.0871C5.84201 12.8111 5 11.0039 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9C19 11.0039 18.158 12.8111 16.8085 14.0871C16.3334 14.5363 16 15.1349 16 15.7887V18M10 9L12 11M12 11L14 9M12 11V18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

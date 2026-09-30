import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const KeyIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 23 24" width="23" height="24" fill="none" {...props}>
      <circle cx="8.7915" cy="15.2083" r="6.875" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M12.9165 9.25002L20.4026 1.91669M21.1665 7.41669L17.9582 4.66669"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

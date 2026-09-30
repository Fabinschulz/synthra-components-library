import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const AddIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <path
        d="M12 7.6V16.4M16.4 12H7.6M18.6 1H5.4C2.96995 1 1 2.96995 1 5.4V18.6C1 21.0301 2.96995 23 5.4 23H18.6C21.0301 23 23 21.0301 23 18.6V5.4C23 2.96995 21.0301 1 18.6 1Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const NotebookSmartFoneIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" height="24px" width="24px" {...props}>
      <rect
        x="14"
        y="7"
        width="8"
        height="13"
        rx="2"
        stroke="#373737"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M20 4H6C4.89543 4 4 4.89543 4 6V17H11"
        stroke="#373737"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M11 17H3.5C2.67157 17 2 17.6716 2 18.5V18.5C2 19.3284 2.67157 20 3.5 20H11"
        stroke="#373737"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

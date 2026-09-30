import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ReloadIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 22 22" width="22" height="22" fill="none" {...props}>
      <path
        d="M1.83342 11C1.83342 16.0627 5.93747 20.1667 11.0001 20.1667C16.0627 20.1667 20.1667 16.0627 20.1667 11C20.1667 5.93743 16.0627 1.83337 11.0001 1.83337C7.60712 1.83337 4.64471 3.67678 3.05975 6.41671M3.05975 6.41671V1.83337M3.05975 6.41671H7.56258"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

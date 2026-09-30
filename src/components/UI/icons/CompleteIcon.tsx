import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const CompleteIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 26 24" width="26" height="24" fill="none" {...props}>
      <path
        d="M8.8 11.5H13M1 9.12499H3.4M1 13.875H3.4M9.94423 2.30914L23.421 8.97329C25.5263 10.0144 25.5263 12.9856 23.421 14.0267L9.94423 20.6909C7.54728 21.8761 4.96818 19.4387 6.05658 17.0168L8.02022 12.6473C8.34847 11.9169 8.34847 11.0831 8.02022 10.3527L6.05658 5.98317C4.96818 3.56126 7.54729 1.12387 9.94423 2.30914Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

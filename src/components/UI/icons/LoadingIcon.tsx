import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const LoadingIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <path
        d="M12 5V2M12 22V19M7.05028 7.05024L4.92896 4.92892M19.0711 19.0711L16.9498 16.9497M19 12H22M2 12H5M16.9497 7.05024L19.071 4.92892M4.92891 19.0711L7.05023 16.9497"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

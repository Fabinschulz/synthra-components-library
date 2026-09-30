import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const DeleteIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <path
        d="M19.7778 8.7L18.9823 18.9375C18.8042 21.2298 16.8734 23 14.551 23H9.44903C7.12664 23 5.19579 21.2299 5.01767 18.9375L4.22222 8.7M22 6.5C19.1134 5.10738 15.6818 4.3 12 4.3C8.31817 4.3 4.88657 5.10738 2 6.5M9.77778 4.3V3.2C9.77778 1.98497 10.7727 1 12 1C13.2273 1 14.2222 1.98497 14.2222 3.2V4.3M9.77778 10.9V17.5M14.2222 10.9V17.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

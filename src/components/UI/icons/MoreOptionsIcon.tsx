import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const MoreOptionsIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <path
        d="M12 15C10.6193 15 9.5 13.8807 9.5 12.5C9.5 11.1193 10.6193 10 12 10C13.3807 10 14.5 11.1193 14.5 12.5C14.5 13.8807 13.3807 15 12 15Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M20.5 15C19.1193 15 18 13.8807 18 12.5C18 11.1193 19.1193 10 20.5 10C21.8807 10 23 11.1193 23 12.5C23 13.8807 21.8807 15 20.5 15Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M3.5 15C2.11929 15 1 13.8807 1 12.5C1 11.1193 2.11929 10 3.5 10C4.88071 10 6 11.1193 6 12.5C6 13.8807 4.88071 15 3.5 15Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </SvgIcon>
  );
};

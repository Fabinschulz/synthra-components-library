import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const PhysicsIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M15.3417 15.3416C10.7279 19.9555 5.49154 22.1996 3.64602 20.3541C1.8005 18.5085 4.04463 13.2722 8.65843 8.65838C13.2722 4.04456 18.5086 1.80041 20.3541 3.64594C22.1996 5.49147 19.9555 10.7278 15.3417 15.3416Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M15.3416 8.65837C19.9554 13.2722 22.1995 18.5085 20.354 20.3541C18.5085 22.1996 13.2721 19.9554 8.65834 15.3416C4.04454 10.7278 1.80041 5.49146 3.64593 3.64593C5.49145 1.8004 10.7278 4.04455 15.3416 8.65837Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </SvgIcon>
  );
};

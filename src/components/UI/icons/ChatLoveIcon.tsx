import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ChatLoveIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M13 3H11C6.02944 3 2 7.02944 2 12V17C2 19.2091 3.79086 21 6 21H13C17.9706 21 22 16.9706 22 12C22 7.02944 17.9706 3 13 3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12.2651 9.91679L12 10.182L11.7348 9.91679C11.0026 9.18456 9.81538 9.18456 9.08315 9.91679C8.35092 10.649 8.35092 11.8362 9.08315 12.5684L10.9393 14.4246C11.5251 15.0104 12.4748 15.0104 13.0606 14.4246L14.9168 12.5684C15.649 11.8362 15.649 10.649 14.9168 9.91679C14.1845 9.18456 12.9974 9.18456 12.2651 9.91679Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

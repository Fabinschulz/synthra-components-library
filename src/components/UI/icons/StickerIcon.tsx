import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const StickerIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M21.5 11H18C14.6863 11 12 13.6863 12 17V20.5M6 3H18C20.2091 3 22 4.79086 22 7V10.1716C22 10.702 21.7893 11.2107 21.4142 11.5858L12.5858 20.4142C12.2107 20.7893 11.702 21 11.1716 21H6C3.79086 21 2 19.2091 2 17V7C2 4.79086 3.79086 3 6 3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

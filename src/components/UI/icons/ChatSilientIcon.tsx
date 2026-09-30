import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ChatSilientIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M7 14H14M7 10H10M5.15559 5.15559C3.22427 6.80631 2 9.26018 2 12V17C2 19.2091 3.79086 21 6 21H13C15.2307 21 17.2719 20.1884 18.8444 18.8444M5.15559 5.15559L3 3M5.15559 5.15559L18.8444 18.8444M18.8444 18.8444L21 21M7.64581 3.64581C8.6824 3.22924 9.81443 3 11 3H13C17.9706 3 22 7.02944 22 12C22 13.7165 21.5195 15.3208 20.6856 16.6856"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

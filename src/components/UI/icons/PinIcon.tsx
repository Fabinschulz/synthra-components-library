import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const PinIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M8.48521 15.5148L3 21M15.8288 15.3761L17.517 13.6879C17.8992 13.3057 18.4176 13.091 18.958 13.091C20.7736 13.091 21.6828 10.896 20.399 9.61217L14.3878 3.60096C13.104 2.31718 10.9089 3.22641 10.9089 5.04196C10.9089 5.58243 10.6942 6.10078 10.3121 6.48295L8.62383 8.17118C8.24165 8.55335 7.72331 8.76806 7.18283 8.76806C5.36728 8.76806 4.45804 10.9631 5.74183 12.2469L11.7531 18.2581C13.0368 19.5419 15.2319 18.6327 15.2319 16.8171C15.2319 16.2767 15.4466 15.7583 15.8288 15.3761Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

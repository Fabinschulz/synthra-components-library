import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const NextArrowIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 25" width="24" height="25" fill="none" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M11 9.66661L6.00774 6.75446C4.67443 5.97669 3 6.93844 3 8.48202V15.5179C3 17.0615 4.67443 18.0232 6.00774 17.2454L11 14.3333M11 9.66661V8.48202C11 6.93844 12.6744 5.97669 14.0077 6.75446L20.0385 10.2724C21.3615 11.0441 21.3615 12.9557 20.0385 13.7275L14.0077 17.2454C12.6744 18.0232 11 17.0615 11 15.5179V14.3333M11 9.66661V14.3333"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

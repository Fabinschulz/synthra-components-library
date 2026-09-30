import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const AnnouncementIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M14.1601 15.9282L16.3071 19.6469C16.7213 20.3643 16.4755 21.2817 15.758 21.6959C15.0406 22.1101 14.1232 21.8643 13.709 21.1469L11.0555 16.5508M19.4543 4.83011L19.8203 3.46408M21.4543 8.29422L22.8203 8.66025M8.09809 17.1603L18.7168 14.7288C20.0285 14.4284 20.6753 12.9446 20.0025 11.7792L15.7104 4.34513C15.0376 3.1798 13.4291 2.998 12.5132 3.98376L5.09809 11.9641L8.09809 17.1603ZM5.34812 12.3971L7.84812 16.7272C8.26233 17.4447 8.01652 18.362 7.29908 18.7763C6.58164 19.1905 5.66425 18.9447 5.25004 18.2272L2.75004 13.8971C2.33583 13.1797 2.58164 12.2623 3.29908 11.8481C4.01652 11.4338 4.9339 11.6797 5.34812 12.3971Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

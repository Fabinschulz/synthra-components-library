import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const PenIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19.4626 4.53754C20.4296 5.50455 20.4296 7.07236 19.4626 8.03936L8.43 19.0719C7.85268 19.6492 7.1245 20.0523 6.32878 20.2351L3 21L3.76486 17.6712C3.94769 16.8755 4.35083 16.1474 4.92815 15.57L15.9607 4.53755C16.9278 3.57054 18.4956 3.57054 19.4626 4.53754ZM19.4626 4.53754L21 3M17.1562 14.5314L18.6937 12.9939C19.5429 12.1448 19.5429 10.768 18.6937 9.91887L14.8498 6.07505M5.30618 15.6186L8.38126 18.6937"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

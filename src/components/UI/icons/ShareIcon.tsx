import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ShareIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 24 26" width="24" height="26" fill="none" {...props}>
      <path
        d="M19.3333 10V8.2C19.3333 6.87452 18.2389 5.8 16.8889 5.8H13.8333M10.1667 20.2H7.11111C5.76108 20.2 4.66667 19.1255 4.66667 17.8V16M1 3.4V10.6C1 11.9255 2.09442 13 3.44444 13H8.33333C9.68336 13 10.7778 11.9255 10.7778 10.6V4.48904C10.7778 3.79697 10.4735 3.13859 9.94301 2.68286L8.67534 1.59382C8.22974 1.211 7.65776 1 7.06566 1H3.44445C2.09442 1 1 2.07452 1 3.4ZM13.2222 15.4V22.6C13.2222 23.9255 14.3166 25 15.6667 25H20.5556C21.9056 25 23 23.9255 23 22.6V16.489C23 15.797 22.6957 15.1386 22.1652 14.6829L20.8976 13.5938C20.452 13.211 19.88 13 19.2879 13H15.6667C14.3166 13 13.2222 14.0745 13.2222 15.4Z"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

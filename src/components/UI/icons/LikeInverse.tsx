import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const LikeInverse: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

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
          d="M18 8H20C21.1045 8 22 8.89543 22 10V19C22 20.1046 21.1045 21 20 21H18C16.8954 21 16 20.1046 16 19V10C16 8.89543 16.8954 8 18 8Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.12309 21H11.7889C12.5786 21 13.3506 20.7662 14.0077 20.3282L15.5547 19.2969C15.8329 19.1114 16 18.7992 16 18.4648V10.2656C16 10.0915 15.9546 9.92052 15.8682 9.76943L12 3H10.6713C8.67453 3 7.48355 5.22536 8.59115 6.88675L9.99998 9H4.56153C3.26039 9 2.30567 10.2228 2.62125 11.4851L4.24252 17.9701C4.68768 19.7508 6.28761 21 8.12309 21Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

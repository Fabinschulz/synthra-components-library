import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const NibIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M13 14C14.1046 14 15 13.1046 15 12C15 10.8954 14.1046 10 13 10C11.8954 10 11 10.8954 11 12C11 13.1046 11.8954 14 13 14ZM13 14V22M8 6H18C19.1046 6 20 5.10457 20 4C20 2.89543 19.1046 2 18 2H8C6.89543 2 6 2.89543 6 4C6 5.10457 6.89543 6 8 6ZM7.99197 6H18.008L19.7221 11.3282C20.2189 12.5829 20.0429 13.9811 19.2476 15.0968L13.9519 21.526C13.5014 22.158 12.4986 22.158 12.0481 21.526L6.75238 15.0968C5.95707 13.9811 5.78105 12.5829 6.27795 11.3282L7.99197 6Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

NibIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

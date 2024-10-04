import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const OperatorIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99942 16.9012C13.3143 16.9012 17 17.5995 17 20.3888C17 23.1793 13.3376 23.9012 8.99942 23.9012C4.68457 23.9012 1 23.2042 1 20.4137C1 17.6232 4.66119 16.9012 8.99942 16.9012Z"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M18 13.9012C20.6966 13.9012 23 14.4216 23 16.5001C23 17.8867 21.9823 18.5879 20.5002 18.9012"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99943 11.9012C6.22374 11.9012 4 9.67636 4 6.90067C4 4.12613 6.22374 1.90125 8.99943 1.90125C11.7751 1.90125 14 4.12613 14 6.90067C14 9.67636 11.7751 11.9012 8.99943 11.9012Z"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M19 9.90125C21.2203 9.90125 23 8.12134 23 5.90079C23 3.68115 21.2203 1.90125 19 1.90125"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

OperatorIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

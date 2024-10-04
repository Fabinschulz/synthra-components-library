import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const NaturalPersonIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <circle
        cx="12"
        cy="6.90125"
        r="5"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9994 16.9012C16.3143 16.9012 20 17.5995 20 20.3888C20 23.1793 16.3376 23.9012 11.9994 23.9012C7.68457 23.9012 4 23.2042 4 20.4137C4 17.6232 7.66119 16.9012 11.9994 16.9012Z"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9994 11.9012C9.22374 11.9012 7 9.67636 7 6.90067C7 4.12613 9.22374 1.90125 11.9994 1.90125C14.7751 1.90125 17 4.12613 17 6.90067C17 9.67636 14.7751 11.9012 11.9994 11.9012Z"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

NaturalPersonIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

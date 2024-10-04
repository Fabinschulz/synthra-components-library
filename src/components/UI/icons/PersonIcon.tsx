import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const PersonIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99942 16C13.3143 16 17 16.6983 17 19.4875C17 22.278 13.3376 23 8.99942 23C4.68457 23 1 22.303 1 19.5125C1 16.722 4.66119 16 8.99942 16Z"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99943 11C6.22374 11 4 8.77512 4 5.99943C4 3.22488 6.22374 1 8.99943 1C11.7751 1 14 3.22488 14 5.99943C14 8.77512 11.7751 11 8.99943 11Z"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path fill="none" d="M23 6H19" stroke={htmlColor} strokeWidth="2" strokeLinecap="round" />
      <path fill="none" d="M21 4L21 8" stroke={htmlColor} strokeWidth="2" strokeLinecap="round" />
    </SvgIcon>
  );
};

PersonIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

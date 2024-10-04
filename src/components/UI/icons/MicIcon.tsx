import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const MicIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        stroke={htmlColor}
        fill="none"
        d="M17 8V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V14C7 16.7614 9.23858 19 12 19C14.7614 19 17 16.7614 17 14V13M17 8H13M17 8V13M17 13H13M20 12V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V12"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

MicIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

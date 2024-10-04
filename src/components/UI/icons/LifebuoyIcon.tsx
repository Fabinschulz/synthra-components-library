import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const LifebuoyIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        d="M14.4042 9.59584L18.8 5.2M5.2 18.8L9.59583 14.4042M14.4042 14.4042L18.8 18.8M5.2 5.2L9.59583 9.59583M8.6 3.5H15.4C18.2167 3.5 20.5 5.78335 20.5 8.6V15.4C20.5 18.2167 18.2167 20.5 15.4 20.5H8.6C5.78335 20.5 3.5 18.2167 3.5 15.4V8.6C3.5 5.78335 5.78335 3.5 8.6 3.5ZM15.4 12C15.4 13.8778 13.8778 15.4 12 15.4C10.1222 15.4 8.6 13.8778 8.6 12C8.6 10.1222 10.1222 8.6 12 8.6C13.8778 8.6 15.4 10.1222 15.4 12Z"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

LifebuoyIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

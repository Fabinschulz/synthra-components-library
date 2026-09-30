import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ShieldIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;
  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <path
        d="M10.3929 18.8304L3.03584 8.89839C2.44195 8.09664 2.52302 6.96823 3.29579 6.3371C8.74382 1.88763 15.2562 1.88763 20.7042 6.3371C21.477 6.96823 21.558 8.09664 20.9642 8.89839L13.6071 18.8304C12.8076 19.9098 11.1924 19.9098 10.3929 18.8304Z"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

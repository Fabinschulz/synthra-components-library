import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ShieldErrorIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" height="24px" width="24px" {...props}>
      <path
        d="M19.5 10.875L20.9642 8.89839C21.558 8.09664 21.477 6.96823 20.7042 6.3371C15.2562 1.88763 8.74382 1.88763 3.29579 6.3371C2.52302 6.96823 2.44195 8.09664 3.03584 8.89839L10.3929 18.8304C11.1924 19.9098 12.8076 19.9098 13.6071 18.8304L14.2222 18"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M21.2427 14L17 18.2426"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M17 14L21.2426 18.2426"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

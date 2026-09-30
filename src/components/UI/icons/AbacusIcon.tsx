import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const AbacusIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M6 8H18M6 16H18M15 6.5V9.5M9 14.5V17.5M12 14.5V17.5M12 6.5V9.5M4 22C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4V20C6 21.1046 5.10457 22 4 22ZM20 22C18.8954 22 18 21.1046 18 20V4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

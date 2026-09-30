import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const FlagIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M3 22V14M3 14V3M3 14H7M3 3V2M3 3H15C16.1046 3 17 3.89543 17 5V7M17 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H9C7.89543 19 7 18.1046 7 17V14M17 7V12C17 13.1046 16.1046 14 15 14H7"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

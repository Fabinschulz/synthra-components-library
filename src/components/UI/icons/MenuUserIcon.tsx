import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const MenuUserIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 24 25" width="25" height="24" fill="none" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14 12H22M14 7H22M16 17H22M10 8C10 9.65685 8.65685 11 7 11C5.34315 11 4 9.65685 4 8C4 6.34315 5.34315 5 7 5C8.65685 5 10 6.34315 10 8ZM12 16C12 17.6569 9.76142 19 7 19C4.23858 19 2 17.6569 2 16C2 14.3431 4.23858 13 7 13C9.76142 13 12 14.3431 12 16Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

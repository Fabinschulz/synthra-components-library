import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ArrowMaximizeIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 24 25" width="24" height="25" fill="none" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6 12H8C10.2091 12 12 13.7909 12 16V18M6 12C3.79086 12 2 13.7909 2 16V18C2 20.2091 3.79086 22 6 22H8C10.2091 22 12 20.2091 12 18M6 12V6C6 3.79086 7.79086 2 10 2H18C20.2091 2 22 3.79086 22 6V14C22 16.2091 20.2091 18 18 18H12"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 7H17M17 7V12M17 7L11 13"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const CalendarIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <path d="M16 1V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M8 1V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path
        d="M2 7C2 4.79086 3.79086 3 6 3H18C20.2091 3 22 4.79086 22 7V19C22 21.2091 20.2091 23 18 23H6C3.79086 23 2 21.2091 2 19V7Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M2 9H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </SvgIcon>
  );
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const MailBoxIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M17 22V19M17 19H14V22M17 19H7M17 19C19.2091 19 21 17.2091 21 15V10C21 7.23858 18.7614 5 16 5H8M7 19H9C11.2091 19 13 17.2091 13 15V10C13 7.23858 10.7614 5 8 5M7 19C4.79086 19 3 17.2091 3 15V10C3 7.23858 5.23858 5 8 5M16 7V4C16 2.89543 16.8954 2 18 2H19"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

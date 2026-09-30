import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const MailArrowUpIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M18 3.99997L19.2929 2.70708C19.6834 2.31655 20.3166 2.31655 20.7071 2.70708L22 3.99997M20 7.99997V2.99997M6 13L8.2 14.65C9.26667 15.45 10.7333 15.45 11.8 14.65L14 13M5 22H15C16.6569 22 18 20.6568 18 19V11C18 9.34312 16.6569 7.99997 15 7.99997H5C3.34315 7.99997 2 9.34312 2 11V19C2 20.6568 3.34315 22 5 22Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

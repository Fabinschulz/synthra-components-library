import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const EyeShowIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2V4M21 5L19.5 6.5M2.99997 5L4.49997 6.5M12 22C15.6042 22 18.8134 19.6545 20.8772 17.6789C22.3743 16.2458 22.3743 13.7542 20.8772 12.3211C18.8134 10.3455 15.6042 8 12 8C8.3958 8 5.18661 10.3455 3.12281 12.3211C1.62573 13.7542 1.62573 16.2458 3.12281 17.6789C5.18661 19.6545 8.3958 22 12 22ZM15 15C15 16.6569 13.6568 18 12 18C10.3431 18 8.99997 16.6569 8.99997 15C8.99997 13.3431 10.3431 12 12 12C13.6568 12 15 13.3431 15 15Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </SvgIcon>
  );
};

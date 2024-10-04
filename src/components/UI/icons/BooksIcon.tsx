import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const BooksIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 15H15C16.6569 15 18 16.3431 18 18C18 19.6569 16.6569 21 15 21H4M4 15V21M4 15H2M4 21H2M4 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9H4M4 3V9M4 3H2M4 9H2M20 9H9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15H20M20 9V15M20 9H22M20 15H22"
          stroke="#373737"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

BooksIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const EditIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 23 23" width="23" height="23" fill="none" {...props}>
      <path
        d="M11.5 6.25L16.75 11.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M1 21C1 21.5523 1.44772 22 2 22L5.78248 22C6.89237 22 7.96166 21.5825 8.77796 20.8305L20.5833 9.04579C21.3655 8.26494 21.3661 6.99766 20.5845 6.21613L16.7826 2.41421C16.0016 1.63317 14.7353 1.63317 13.9542 2.41421L2.17157 14.1968C1.42143 14.947 1 15.9644 1 17.0253V21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

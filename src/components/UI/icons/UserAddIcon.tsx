import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UserAddIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { fill = 'none' } = props;

  return (
    <SvgIcon {...props}>
      <ellipse
        cx="10"
        cy="17.5"
        rx="7"
        ry="3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill={fill}
      />
      <circle
        cx="10"
        cy="7"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill={fill}
      />
      <path d="M21 11H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 9L19 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </SvgIcon>
  );
};

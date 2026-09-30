import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UserRejectIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { fill = 'none' } = props;

  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
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
      <path
        d="M17 13L19 11M21 9L19 11M19 11L21 13M19 11L17 9"
        stroke="currentColor"
        strokeWidth="1.5"
        stroke-linecap="round"
      />
    </SvgIcon>
  );
};

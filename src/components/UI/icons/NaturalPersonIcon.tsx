import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const NaturalPersonIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { fill = 'none' } = props;

  return (
    <SvgIcon {...props}>
      <ellipse
        fill={fill}
        cx="12"
        cy="17.5"
        rx="7"
        ry="3.5"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <circle
        cx="12"
        cy="7"
        r="4"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linejoin="round"
        fill={fill}
      />
    </SvgIcon>
  );
};

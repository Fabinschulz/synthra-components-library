import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const IntersectingArrowsIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        d="M20 4L13 11M4 20L11 13M13 11H18M13 11V6M11 13V18M11 13H6"
        stroke={htmlColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

IntersectingArrowsIcon.defaultProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  height: '24px',
  width: '24px'
};

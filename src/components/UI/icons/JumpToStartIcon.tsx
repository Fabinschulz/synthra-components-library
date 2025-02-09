import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const JumpToStartIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#000000' } = props;

  return (
    <SvgIcon {...props}>
      <path
        d="M20.825 11L22 12.175L18.1833 16L22 19.825L20.825 21L15.825 16L20.825 11Z"
        fill={htmlColor}
      />
      <line
        y1="-1"
        x2="10"
        y2="-1"
        transform="matrix(0 -1 -1 0 12.9121 21)"
        stroke={htmlColor}
        strokeWidth="2"
      />
    </SvgIcon>
  );
};

JumpToStartIcon.defaultProps = {
  viewBox: '0 0 32 32',
  width: '32',
  height: '32',
  fill: 'none'
};

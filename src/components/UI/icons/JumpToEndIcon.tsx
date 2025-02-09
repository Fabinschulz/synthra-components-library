import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const JumpToEndIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#000000' } = props;

  return (
    <SvgIcon {...props}>
      <path d="M5.175 5L4 6.175L7.81667 10L4 13.825L5.175 15L10.175 10L5.175 5Z" fill={htmlColor} />
      <line x1="12.0879" y1="15" x2="12.0879" y2="5" stroke={htmlColor} strokeWidth="2" />
    </SvgIcon>
  );
};

JumpToEndIcon.defaultProps = {
  viewBox: '0 0 32 32',
  width: '32',
  height: '32',
  fill: 'none'
};

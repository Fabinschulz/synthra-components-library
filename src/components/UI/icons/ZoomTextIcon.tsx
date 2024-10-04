import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ZoomTextIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M22 20L20.5 18.5M7 14H2M7 9H2M15 4H2M22 14C22 17.3137 19.3137 20 16 20C12.6863 20 10 17.3137 10 14C10 10.6863 12.6863 8 16 8C19.3137 8 22 10.6863 22 14Z"
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

ZoomTextIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

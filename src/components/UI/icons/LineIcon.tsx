import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const LineIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#D04D27' } = props;

  return (
    <SvgIcon viewBox="0 0 190 2" width="190" height="2" fill="none" {...props}>
      <line
        x1="1"
        y1="1"
        x2="189"
        y2="1"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="8 8"
      />
    </SvgIcon>
  );
};

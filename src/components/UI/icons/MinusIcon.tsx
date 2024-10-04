import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const MinusIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M18 12L6 12"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

MinusIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

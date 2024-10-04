import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UploadCircleIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M8 6L12 2M12 2L16 6M12 2L12 16"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.2454 9C19.3433 10.3696 20 12.1081 20 14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14C4 12.1081 4.65672 10.3696 5.75462 9"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

UploadCircleIcon.defaultProps = {
  viewBox: '0 0 24 25',
  width: '24',
  height: '25',
  fill: 'none'
};

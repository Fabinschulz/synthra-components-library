import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UpDownIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M8.48207 17L15.5179 17C17.0615 17 18.0233 15.3256 17.2455 13.9923L13.7276 7.96153C12.9558 6.63852 11.0442 6.63852 10.2724 7.96153L6.75452 13.9923C5.97675 15.3256 6.93849 17 8.48207 17Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

UpDownIcon.defaultProps = {
  viewBox: '0 0 24 25',
  width: '24',
  height: '25',
  fill: 'none'
};

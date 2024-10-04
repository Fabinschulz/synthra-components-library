import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const LeftArrowIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M17 15.5179V8.48207C17 6.93849 15.3256 5.97675 13.9923 6.75451L7.96153 10.2724C6.63852 11.0442 6.63852 12.9558 7.96153 13.7276L13.9923 17.2455C15.3256 18.0232 17 17.0615 17 15.5179Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

LeftArrowIcon.defaultProps = {
  viewBox: '0 0 24 25',
  width: '24',
  height: '25',
  fill: 'none'
};

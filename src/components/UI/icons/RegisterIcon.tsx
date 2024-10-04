import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const RegisterIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M23 12V18.6C23 21.0301 21.0301 23 18.6 23H5.4C2.96995 23 1 21.0301 1 18.6V5.4C1 2.96995 2.96995 1 5.4 1H12M16.055 3.22502C16.055 3.22502 16.055 4.79835 17.6283 6.37168C19.2017 7.945 20.775 7.945 20.775 7.945M8.87014 16.3885L12.1741 15.9165C12.6507 15.8484 13.0924 15.6276 13.4328 15.2872L22.3483 6.37167C23.2172 5.50275 23.2172 4.09394 22.3483 3.22502L20.775 1.65169C19.9061 0.782769 18.4973 0.782769 17.6283 1.65169L8.71281 10.5672C8.37239 10.9076 8.15156 11.3493 8.08348 11.8259L7.61148 15.1299C7.50659 15.8641 8.13592 16.4934 8.87014 16.3885Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

RegisterIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

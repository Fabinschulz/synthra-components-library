import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const GraduationCapIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M18 12V16C18 17.6568 16.6569 19 15 19H9C7.34315 19 6 17.6568 6 16V12M11.1056 5.4472L2 9.99999L11.1056 14.5528C11.6686 14.8343 12.3314 14.8343 12.8944 14.5528L22 9.99999L12.8944 5.4472C12.3314 5.16567 11.6686 5.16567 11.1056 5.4472Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M22 10V16"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

GraduationCapIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

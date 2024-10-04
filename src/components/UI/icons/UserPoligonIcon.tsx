import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UserPoligonIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M18.301 18.9281L18.9215 18.5607C20.2077 17.799 21 16.3914 21 14.8681V9.13192C21 7.6086 20.2077 6.20099 18.9215 5.43932L14.0785 2.57125C12.7923 1.80958 11.2077 1.80958 9.92154 2.57125L5.07846 5.43932C3.7923 6.20099 3 7.6086 3 9.13192V14.8681C3 16.3914 3.7923 17.799 5.07846 18.5607L5.69896 18.9281M18.301 18.9281L14.0785 21.4288C12.7923 22.1904 11.2077 22.1904 9.92154 21.4288L5.69896 18.9281M18.301 18.9281C17.0431 16.6982 14.6924 15.1979 12 15.1979C9.30762 15.1979 6.95686 16.6982 5.69896 18.9281"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle
          cx="3"
          cy="3"
          r="3"
          transform="matrix(1 0 0 -1 9 12)"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

UserPoligonIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

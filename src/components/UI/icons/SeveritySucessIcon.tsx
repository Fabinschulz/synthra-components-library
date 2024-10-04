import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const SeveritySucessIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
      >
        <rect width="56" height="56" rx="8" fill="#7BC67E" />
        <path
          d="M20.4481 22.8148H17.8074C16.349 22.8148 15.1667 23.9755 15.1667 25.4074V37.0741C15.1667 38.5059 16.349 39.6666 17.8074 39.6666H20.4481C21.9065 39.6666 23.0888 38.5059 23.0888 37.0741V25.4074C23.0888 23.9755 21.9065 22.8148 20.4481 22.8148Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33.489 39.6666H28.6489C27.6062 39.6666 26.5869 39.3636 25.7193 38.7958L23.6767 37.4589C23.3094 37.2185 23.0888 36.8137 23.0888 36.3803V25.7516C23.0888 25.526 23.1488 25.3044 23.2628 25.1085L28.3702 16.3333H30.1245C32.7609 16.3333 34.3334 19.218 32.871 21.3717L31.0108 24.1111H38.1914C39.9094 24.1111 41.1699 25.6962 40.7533 27.3325L38.6126 35.7391C38.0249 38.0473 35.9124 39.6666 33.489 39.6666Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

SeveritySucessIcon.defaultProps = {
  viewBox: '0 0 56 56',
  width: '26',
  height: '26'
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const PaintBucketIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16.8696 12.1618L20 10.6127L12.9565 3.64167C12.0921 2.78611 10.6905 2.78611 9.82609 3.64167L2.78261 10.6127C2.35039 11.0405 2.13427 11.6012 2.13427 12.1618M16.8696 12.1618L10.6087 18.3583C9.74425 19.2139 8.34271 19.2139 7.47826 18.3583L2.78261 13.711C2.35039 13.2832 2.13427 12.7225 2.13427 12.1618M16.8696 12.1618L2.13427 12.1618M2.13427 12.1618L2 12.1618M21.9853 18.7353C21.9853 20.3921 20.9853 20.9853 19.9853 20.9853C18.9853 20.9853 17.9853 20.3921 17.9853 18.7353C17.9853 17.0784 19.9853 14.9853 19.9853 14.9853C19.9853 14.9853 21.9853 17.0784 21.9853 18.7353Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

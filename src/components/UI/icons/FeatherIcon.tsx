import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const FeatherIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M2 22L12.0673 11.9327M17.9092 11.653C18.409 11.653 18.8861 11.4291 19.1787 11.0239C20.6325 9.01079 21.6196 6.6383 21.9813 4.0651C22.151 2.85824 21.141 1.849 19.9342 2.0187C13.0461 2.98731 7.59633 8.43705 6.62773 15.3252C6.45802 16.5321 7.46726 17.542 8.67411 17.3723C11.2473 17.0106 13.6198 16.0235 15.6329 14.5697C16.0381 14.2771 16.262 13.8 16.262 13.3002C16.262 12.3905 16.9995 11.653 17.9092 11.653Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

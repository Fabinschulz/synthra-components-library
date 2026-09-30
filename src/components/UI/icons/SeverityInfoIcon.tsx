import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const SeverityInfoIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 56 56" width="26" height="26" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
      >
        <rect width="56" height="56" rx="8" fill="#7471FD" />
        <mask id="path-2-inside-1_975_1428" fill="white">
          <ellipse cx="27.9999" cy="22.1667" rx="1.16667" ry="1.16667" />
        </mask>
        <ellipse cx="27.9999" cy="22.1667" rx="1.16667" ry="1.16667" fill="white" />
        <path
          d="M27.1666 22.1667C27.1666 21.7064 27.5397 21.3333 27.9999 21.3333V25.3333C29.7488 25.3333 31.1666 23.9156 31.1666 22.1667H27.1666ZM27.9999 21.3333C28.4602 21.3333 28.8333 21.7064 28.8333 22.1667H24.8333C24.8333 23.9156 26.251 25.3333 27.9999 25.3333V21.3333ZM28.8333 22.1667C28.8333 22.6269 28.4602 23 27.9999 23V19C26.251 19 24.8333 20.4178 24.8333 22.1667H28.8333ZM27.9999 23C27.5397 23 27.1666 22.6269 27.1666 22.1667H31.1666C31.1666 20.4178 29.7488 19 27.9999 19V23Z"
          fill="white"
          mask="url(#path-2-inside-1_975_1428)"
        />
        <path
          d="M26.8333 25.6667H27.9999V33.8333M39.6666 28C39.6666 34.4433 34.4432 39.6667 27.9999 39.6667C21.5566 39.6667 16.3333 34.4433 16.3333 28C16.3333 21.5567 21.5566 16.3333 27.9999 16.3333C34.4432 16.3333 39.6666 21.5567 39.6666 28Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

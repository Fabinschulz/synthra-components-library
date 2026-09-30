import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const FilledTime: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <circle
        cx="12"
        cy="12"
        r="11"
        transform="rotate(-90 12 12)"
        fill="currentColor"
        stroke="white"
        strokeWidth="2"
      />
      <g clipPath="url(#clip0_902_8968)">
        <path
          d="M11.9998 12H11.4998C11.4998 12.2152 11.6376 12.4063 11.8417 12.4744L11.9998 12ZM12.4998 8.33335C12.4998 8.05721 12.276 7.83335 11.9998 7.83335C11.7237 7.83335 11.4998 8.05721 11.4998 8.33335H12.4998ZM14.0417 13.2077C14.3037 13.295 14.5869 13.1534 14.6742 12.8915C14.7615 12.6295 14.6199 12.3463 14.358 12.259L14.0417 13.2077ZM12.4998 12V8.33335H11.4998V12H12.4998ZM11.8417 12.4744L14.0417 13.2077L14.358 12.259L12.158 11.5257L11.8417 12.4744ZM18.8332 12C18.8332 15.774 15.7738 18.8334 11.9998 18.8334V19.8334C16.3261 19.8334 19.8332 16.3263 19.8332 12H18.8332ZM11.9998 18.8334C8.22589 18.8334 5.1665 15.774 5.1665 12H4.1665C4.1665 16.3263 7.67361 19.8334 11.9998 19.8334V18.8334ZM5.1665 12C5.1665 8.22607 8.22589 5.16669 11.9998 5.16669V4.16669C7.67361 4.16669 4.1665 7.67379 4.1665 12H5.1665ZM11.9998 5.16669C15.7738 5.16669 18.8332 8.22607 18.8332 12H19.8332C19.8332 7.67379 16.3261 4.16669 11.9998 4.16669V5.16669Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_902_8968">
          <rect width="16" height="16" fill="white" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

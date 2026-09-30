import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const SeverityWarningIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 56 56" width="26" height="26" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
      >
        <rect width="56" height="56" rx="8" fill="#FF9800" />
        <ellipse cx="28.5833" cy="34.4167" rx="1.75" ry="1.75" fill="white" />
        <path
          d="M28.5832 22.9444V30.3981M17.3948 40.8333H39.7718C42.3566 40.8333 43.9905 38.0654 42.7352 35.8131L31.5467 15.7381C30.2551 13.4206 26.9116 13.4206 25.62 15.7381L14.4315 35.8131C13.1762 38.0654 14.81 40.8333 17.3948 40.8333Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

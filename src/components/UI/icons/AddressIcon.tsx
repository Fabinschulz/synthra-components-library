import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const AddressIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <path
        d="M14.2221 8.66667C14.2221 9.89397 13.2272 10.8889 11.9999 10.8889C10.7726 10.8889 9.7777 9.89397 9.7777 8.66667C9.7777 7.43937 10.7726 6.44444 11.9999 6.44444C13.2272 6.44444 14.2221 7.43937 14.2221 8.66667Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M18.6666 8.66667C18.6666 12.3486 14.2221 17.5556 11.9999 17.5556C9.7777 17.5556 5.33325 12.3486 5.33325 8.66667C5.33325 4.98477 8.31802 2 11.9999 2C15.6818 2 18.6666 4.98477 18.6666 8.66667Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M15.3333 15.3333H16.5849C17.904 15.3333 19.1548 15.9192 19.9992 16.9325L21.1848 18.3551C22.3909 19.8025 21.3617 22 19.4776 22H4.52225C2.63816 22 1.60893 19.8025 2.81509 18.3551L4.00061 16.9325C4.84503 15.9192 6.09591 15.3333 7.41493 15.3333H8.6666"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UserAdd2Icon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#020617' } = props;

  return (
    <SvgIcon viewBox="0 0 16 16" width="16" height="16" fill="none" {...props}>
      <path
        d="M10.6673 14V12.6667C10.6673 11.9594 10.3864 11.2811 9.88627 10.781C9.38617 10.281 8.7079 10 8.00065 10H4.00065C3.29341 10 2.61513 10.281 2.11503 10.781C1.61494 11.2811 1.33398 11.9594 1.33398 12.6667V14M12.6673 5.33333V9.33333M14.6673 7.33333H10.6673M8.66732 4.66667C8.66732 6.13943 7.47341 7.33333 6.00065 7.33333C4.52789 7.33333 3.33398 6.13943 3.33398 4.66667C3.33398 3.19391 4.52789 2 6.00065 2C7.47341 2 8.66732 3.19391 8.66732 4.66667Z"
        stroke={htmlColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

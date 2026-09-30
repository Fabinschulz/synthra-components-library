import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const PaymentLinkIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <path
        d="M14.5457 9.45441L9.45449 14.5456"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M9.99996 6.00004L12 4.00003C14.2091 1.79087 17.7909 1.79087 20 4.00002V4.00002C22.2092 6.20918 22.2092 9.79092 20 12.0001L18 14.0001"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M13.9999 18L11.9999 20C9.79075 22.2091 6.20901 22.2091 3.99985 20V20C1.7907 17.7908 1.7907 14.2091 3.99985 11.9999L5.99986 9.99991"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

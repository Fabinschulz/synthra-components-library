import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const BankIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 25 24" width="25" height="24" fill="none" {...props}>
      <path
        d="M3.08457 10L21.9154 10C22.9865 10 23.4072 8.64858 22.5159 8.07059L13.701 2.35375C12.9737 1.88208 12.0263 1.88208 11.299 2.35375L2.48407 8.07059C1.59285 8.64858 2.01346 10 3.08457 10Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect x="4" y="10" width="5" height="9" stroke="currentColor" fill="none" strokeWidth="2" />
      <rect x="15" y="10" width="5" height="9" stroke="currentColor" fill="none" strokeWidth="2" />
      <path
        d="M20.2087 19C20.5734 19 20.9092 19.1985 21.0849 19.5181L22.1849 21.5181C22.5515 22.1845 22.0693 23 21.3087 23L2.69127 23C1.93067 23 1.44851 22.1845 1.81505 21.5181L2.91505 19.5181C3.09081 19.1985 3.42658 19 3.79127 19L20.2087 19Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </SvgIcon>
  );
};

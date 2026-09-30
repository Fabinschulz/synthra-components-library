import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const NoNetworkIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" height="24px" width="24px" {...props}>
      <circle cx="12.4451" cy="19" r="1" fill={htmlColor} />
      <path d="M3 3L21 21" stroke={htmlColor} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path
        d="M21.8901 7.66592C19.4003 5.38903 16.0849 4 12.4451 4C11.0931 4 9.78595 4.19163 8.5492 4.54921M18.6839 11.5133C17.1946 10.0806 15.213 9.15591 13.018 9.01801M9.42549 15.3765C10.1589 14.5332 11.2397 14 12.4451 14C13.2757 14 14.0472 14.2532 14.6865 14.6865M6.20619 11.5133C7.13384 10.6209 8.25248 9.92558 9.49473 9.49473M3 7.66592C3.82222 6.91401 4.73448 6.25893 5.71872 5.71873"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const FilterIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        d="M21 7.95886C21 9.76912 16.9706 11.2366 12 11.2366C7.02944 11.2366 3 9.76912 3 7.95886M21 7.95886C21 12.0856 18.6733 15.6186 15.375 17.0774V19.7194C15.375 20.5471 14.8935 21.3037 14.1312 21.6739L11.8812 22.7665C10.3852 23.4929 8.625 22.4364 8.625 20.812V17.0774C5.32669 15.6186 3 12.0856 3 7.95886M21 7.95886C21 6.92375 19.6825 6.0007 17.625 5.4M3 7.95886C3 6.92375 4.31746 6.0007 6.375 5.4M14.25 4.3V6.5M9.75 6.5V7.6M9.75 1V3.2"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

FilterIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

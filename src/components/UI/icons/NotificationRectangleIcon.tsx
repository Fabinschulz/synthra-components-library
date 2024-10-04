import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const NotificationRectangleIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 11.9V18C18 20.2091 16.2091 22 14 22H6C3.79086 22 2 20.2091 2 18V10C2 7.79086 3.79086 6 6 6H12.1M18 11.9C20.2822 11.4367 22 9.41896 22 7C22 4.23858 19.7614 2 17 2C14.581 2 12.5633 3.71776 12.1 6M18 11.9C17.6769 11.9656 17.3425 12 17 12C14.2386 12 12 9.76142 12 7C12 6.65753 12.0344 6.32311 12.1 6"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </SvgIcon>
  );
};

NotificationRectangleIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

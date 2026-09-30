import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ReportIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <path
        d="M20.8 23H4.3C2.47746 23 1 21.5225 1 19.7V4.3C1 2.47746 2.47746 1 4.3 1H15.3C17.1225 1 18.6 2.47746 18.6 4.3V7.6M20.8 23C19.585 23 18.6 22.015 18.6 20.8V7.6M20.8 23C22.015 23 23 22.015 23 20.8V9.8C23 8.58497 22.015 7.6 20.8 7.6H18.6M5.4 6.5H14.2M5.4 12H14.2M5.4 17.5H9.8"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

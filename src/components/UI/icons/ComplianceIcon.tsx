import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ComplianceIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        d="M18.6 17.7778H15.3M18.6 14.6111H15.3M5.4 22H18.6C21.0301 22 23 20.1096 23 17.7778V7.22222C23 4.89035 21.0301 3 18.6 3H5.4C2.96995 3 1 4.89035 1 7.22222V17.7778C1 20.1096 2.96995 22 5.4 22ZM7.6 7.22222H9.8C11.015 7.22222 12 8.1674 12 9.33333C12 10.4993 11.015 11.4444 9.8 11.4444H7.6C6.38497 11.4444 5.4 10.4993 5.4 9.33333C5.4 8.1674 6.38497 7.22222 7.6 7.22222Z"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

ComplianceIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const RejectIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        d="M19.4731 16.4444H21.7366C22.9866 16.4444 24 15.4495 24 14.2222L24 4.22222C24 2.99492 22.9866 2 21.7366 2H19.4731C18.2231 2 17.2097 2.99492 17.2097 4.22222V14.2222C17.2097 15.4495 18.2231 16.4444 19.4731 16.4444Z"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M8.29524 2L12.4439 2C13.3376 2 14.2113 2.25972 14.9549 2.74644L16.7057 3.89237C17.0206 4.09844 17.2097 4.44537 17.2097 4.81687V13.9272C17.2097 14.1205 17.1583 14.3105 17.0606 14.4784L12.6828 22H11.1791C8.91932 22 7.57147 19.5274 8.82495 17.6814L10.4194 15.3333L4.26455 15.3333C2.79203 15.3333 1.71155 13.9747 2.06869 12.5721L3.90352 5.36651C4.40732 3.38799 6.218 2 8.29524 2Z"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

RejectIcon.defaultProps = {
  viewBox: '0 0 25 24',
  width: '25',
  height: '24',
  fill: 'none'
};

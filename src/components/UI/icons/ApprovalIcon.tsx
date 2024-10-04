import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ApprovalIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        d="M15.3 19.7778L17.2281 21.3358C17.6878 21.7073 18.3555 21.6474 18.7431 21.1999L21.9 17.5556M4.3 7.83849C5.69235 8.0563 7.24556 8.41841 8.7 8.98653M12 5.39263V22C11.7365 22 11.473 21.9206 11.2485 21.7617C8.91244 20.1082 5.63398 19.3589 3.19376 19.0804C1.98607 18.9425 1 17.9235 1 16.6666V4.1502C1 2.89336 1.98607 1.87468 3.19376 2.01252C5.63398 2.29105 8.91244 3.04035 11.2485 4.69383C11.6975 5.01161 12.3025 5.01161 12.7515 4.69383C15.0876 3.04035 18.366 2.29105 20.8062 2.01252C22.0139 1.87468 23 2.89336 23 4.1502V14.2222M4.3 12.2829C5.00344 12.393 5.74793 12.5398 6.5 12.7315"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

ApprovalIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

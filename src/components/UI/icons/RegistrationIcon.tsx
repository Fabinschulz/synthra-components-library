import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const RegistrationIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <path
        d="M6 22C7.86748 22 9.43606 20.7202 9.87657 18.9899C10.0128 18.4547 10.4477 18 11 18H18M6 22C3.79086 22 2 20.2091 2 18V5C2 3.34315 3.34315 2 5 2H15C16.6569 2 18 3.34315 18 5V18M6 22H18C19.8675 22 21.4361 20.7202 21.8766 18.9899C22.0128 18.4547 21.5523 18 21 18H18M10 13V7M7 10H13"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const Search02Icon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 22 24" width="22" height="24" {...props}>
      <path
        d="M19.5 16.7076L21.4217 18.6292C22.1928 19.4004 22.1928 20.6506 21.4217 21.4217C20.6506 22.1928 19.4004 22.1928 18.6293 21.4217L16.7076 19.5M2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5C19 15.1944 15.1944 19 10.5 19C5.80558 19 2 15.1944 2 10.5Z"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

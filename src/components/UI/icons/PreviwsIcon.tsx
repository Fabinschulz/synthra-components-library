import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const PreviwsIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 24 25" width="24" height="25" fill="none" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M13.0308 9.66661L18.023 6.75446C19.3563 5.97669 21.0308 6.93844 21.0308 8.48202V15.5179C21.0308 17.0615 19.3563 18.0232 18.023 17.2454L13.0308 14.3333M13.0308 9.66661V8.48202C13.0308 6.93844 11.3563 5.97669 10.023 6.75446L3.99229 10.2724C2.66928 11.0441 2.66928 12.9557 3.99229 13.7275L10.023 17.2454C11.3563 18.0232 13.0308 17.0615 13.0308 15.5179V14.3333M13.0308 9.66661V14.3333"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

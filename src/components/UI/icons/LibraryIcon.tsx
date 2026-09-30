import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const LibraryIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 14C12 14 7 9.76142 7 7C7 6.79256 7.01263 6.58807 7.03717 6.38726M12 14C12 14 17 9.76142 17 7C17 6.79256 16.9874 6.58807 16.9628 6.38726M12 14V21.5M16.9628 6.38726C17.7518 6.20765 18.519 6.08659 19.2051 6.01002C20.1932 5.89974 21 6.71469 21 7.72016V17.7333C21 18.7388 20.1932 19.554 19.2051 19.6643C17.2086 19.8871 14.5262 20.4865 12.6149 21.8093C12.2475 22.0636 11.7525 22.0636 11.3851 21.8093C9.47382 20.4865 6.79143 19.8871 4.7949 19.6643C3.80678 19.554 3 18.7388 3 17.7333V7.72016C3 6.71469 3.80678 5.89974 4.7949 6.01002C5.48103 6.08659 6.24817 6.20765 7.03717 6.38726M16.9628 6.38726C16.6607 3.91488 14.554 2 12 2C9.44602 2 7.33928 3.91488 7.03717 6.38726M13.5 7C13.5 7.82843 12.8284 8.5 12 8.5C11.1716 8.5 10.5 7.82843 10.5 7C10.5 6.17157 11.1716 5.5 12 5.5C12.8284 5.5 13.5 6.17157 13.5 7Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

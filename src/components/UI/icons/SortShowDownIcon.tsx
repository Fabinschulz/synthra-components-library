import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const SortShowDownIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M12 6H21M12 12H18M12 18H15M3 15.625L4.50518 17.3183C5.30076 18.2134 6.69924 18.2134 7.49482 17.3183L9 15.625M6 18V6"
          stroke={htmlColor}
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="6" r="1" fill={htmlColor} />
      </svg>
    </SvgIcon>
  );
};

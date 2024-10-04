import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const SortArrowUpIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 18H21M12 12H18M12 6H15M3 8.375L4.50518 6.68167C5.30076 5.78664 6.69924 5.78664 7.49482 6.68167L9 8.375M6 6V18"
          stroke={htmlColor}
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

SortArrowUpIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

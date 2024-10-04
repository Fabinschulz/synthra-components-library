import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const DiamondIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M14.1263 3H16.9516C17.5589 3 18.1373 3.263 18.5408 3.72267L21.4629 7.05149C22.141 7.82402 22.1814 8.9755 21.559 9.79476L13.6854 20.1597C12.8342 21.2801 11.1658 21.2801 10.3146 20.1597L2.44095 9.79476C1.81861 8.9755 1.85896 7.82402 2.53709 7.05149L5.45918 3.72267C5.86269 3.263 6.44106 3 7.04842 3H10.1099M14.1263 3L16.2526 8.38285M14.1263 3H10.1099M16.2526 8.38285H21.5684M16.2526 8.38285L12 20.7634L7.74736 8.38285M16.2526 8.38285H7.74736M10.1099 3L7.74736 8.38285M2.43156 8.38285H7.74736"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

DiamondIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

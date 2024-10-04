import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const AscendingOrderIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        d="M12 18H23M12 11H19.3333M12 4H15.6667M1 15.2292L2.83966 17.2047C3.81204 18.2489 5.52129 18.2489 6.49367 17.2047L8.33333 15.2292M4.66667 18V4"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

AscendingOrderIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

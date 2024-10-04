import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const LoveIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        stroke={htmlColor}
        fill="none"
        d="M17 6.49999C18.1045 6.49999 19 7.39542 19 8.49999M12 5.70252L12.6851 4.99999C14.816 2.8147 18.2709 2.8147 20.4018 4.99999C22.4755 7.12659 22.5392 10.5538 20.5461 12.7599L14.8197 19.0981C13.2984 20.782 10.7015 20.782 9.18026 19.0981L3.45393 12.7599C1.46078 10.5538 1.5245 7.12661 3.5982 5C5.72912 2.81471 9.18404 2.81472 11.315 5.00001L12 5.70252Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

LoveIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

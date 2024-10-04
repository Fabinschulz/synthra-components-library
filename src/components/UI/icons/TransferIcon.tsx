import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const TransferIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <rect
        x="22.0811"
        y="16.6733"
        width="20.1667"
        height="14.6667"
        rx="3"
        transform="rotate(-179.963 22.0811 16.6733)"
        stroke={htmlColor}
        strokeWidth="2"
        fill="none"
      />
      <circle
        r="0.916667"
        transform="matrix(-1 -0.000649981 -0.000649981 1 6.50461 5.66314)"
        fill="none"
      />
      <circle
        r="0.916667"
        transform="matrix(-1 -0.000649981 -0.000649981 1 17.4997 13.0037)"
        fill="none"
      />
      <ellipse
        rx="1.83333"
        ry="1.83333"
        transform="matrix(-1 -0.000649981 -0.000649981 1 12.0024 9.33336)"
        stroke={htmlColor}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M10.1605 21.9936L11.3466 20.6399C11.7048 20.231 12.2852 20.2314 12.6429 20.6407L13.8272 21.996M11.9926 24.0001L11.9946 20.9471"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

TransferIcon.defaultProps = {
  viewBox: '0 0 23 24',
  width: '23',
  height: '24',
  fill: 'none'
};

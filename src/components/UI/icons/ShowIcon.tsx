import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ShowIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <g transform="matrix(1 0 0 1 540 540)" id="f7a8bf1e-8fc0-444c-92b1-95b6a49be2c9">
        <rect
          style={{
            stroke: htmlColor,
            strokeWidth: '1',
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeDashoffset: '0',
            strokeLinejoin: 'miter',
            strokeMiterlimit: '4',
            fill: 'none',
            fillRule: 'nonzero',
            opacity: '1',
            visibility: 'hidden'
          }}
          vectorEffect="non-scaling-stroke"
          x="-540"
          y="-540"
          rx="0"
          ry="0"
          width="1080"
          height="1080"
        />
      </g>
      <g transform="matrix(49.09 0 0 49.09 540 540)">
        <g>
          <g transform="matrix(1 0 0 1 0 1.83)">
            <circle
              style={{
                stroke: htmlColor,
                strokeWidth: '2',
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeDashoffset: '0',
                strokeLinejoin: 'miter',
                strokeMiterlimit: '4',
                fill: 'none',
                fillRule: 'nonzero',
                opacity: '1'
              }}
              vectorEffect="non-scaling-stroke"
              cx="0"
              cy="0"
              r="4.5"
            />
          </g>
          <g transform="matrix(1 0 0 1 0 -2.75)">
            <path
              style={{
                stroke: htmlColor,
                strokeWidth: '2',
                strokeDasharray: 'none',
                strokeLinecap: 'round',
                strokeDashoffset: '0',
                strokeLinejoin: 'round',
                strokeMiterlimit: '4',
                fill: 'none',
                fillRule: 'nonzero',
                opacity: '1/'
              }}
              vectorEffect="non-scaling-stroke"
              transform=" translate(-11, -8.25)"
              d="M 20.1667 12.8333 C 20.1667 12.8333 19.1482 3.66666 11 3.66666 C 2.85189 3.66666 1.83337 12.8333 1.83337 12.8333"
              strokeLinecap="round"
            />
          </g>
        </g>
      </g>
    </SvgIcon>
  );
};

ShowIcon.defaultProps = {
  viewBox: '0 0 1080 1080',
  width: '1080',
  height: '1080',
  fill: 'none'
};

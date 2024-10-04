import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const MoneyProfit: FunctionComponent<SvgIconProps> = (props) => {
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
        <rect x="3" y="8" width="18" height="14" rx="3" stroke={htmlColor} strokeWidth="1.7" />
        <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 17 20)" fill={htmlColor} />
        <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 5 12)" fill={htmlColor} />
        <circle
          cx="2"
          cy="2"
          r="2"
          transform="matrix(1 0 0 -1 10 17)"
          stroke={htmlColor}
          strokeWidth="1.7"
        />
        <path
          d="M14 3.58579L12.7071 2.29289C12.3166 1.90237 11.6834 1.90237 11.2929 2.29289L10 3.58579M12 5.5V2.58579"
          stroke={htmlColor}
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

MoneyProfit.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

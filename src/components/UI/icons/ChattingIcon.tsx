import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ChattingIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M17.3726 8.17276C20.0986 9.39695 22 12.1611 22 15.375V18.75C22 19.9926 21.0051 21 19.7778 21H13.1111C10.2084 21 7.73898 19.1217 6.82379 16.5M17.3726 8.17276C16.6711 5.20566 14.0344 3 10.8889 3H9.77778C5.48223 3 2 6.52576 2 10.875V14.25C2 15.4926 2.99492 16.5 4.22222 16.5H6.82379M17.3726 8.17276C17.4922 8.67875 17.5556 9.20688 17.5556 9.75C17.5556 13.4779 14.5708 16.5 10.8889 16.5H6.82379"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

ChattingIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

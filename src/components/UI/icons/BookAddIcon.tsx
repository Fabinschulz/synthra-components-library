import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const BookAddIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M18 15V21M5 8.25464C6.26578 8.45067 7.67778 8.77657 9 9.28788M5 12.2546C5.63949 12.3537 6.3163 12.4859 7 12.6584M12 6.05337V21C11.7605 21 11.5209 20.9285 11.3168 20.7855C9.19313 19.2974 6.21271 18.623 3.99433 18.3723C2.89642 18.2483 2 17.3311 2 16.2V4.93518C2 3.80402 2.89642 2.88721 3.99433 3.01127C6.21271 3.26195 9.19313 3.93632 11.3168 5.42445C11.725 5.71045 12.275 5.71045 12.6832 5.42445C14.8069 3.93632 17.7873 3.26195 20.0057 3.01127C21.1036 2.88721 22 3.80402 22 4.93518V14M21 18H15"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

BookAddIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

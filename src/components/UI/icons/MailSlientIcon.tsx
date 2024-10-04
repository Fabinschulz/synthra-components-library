import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const MailSlientIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M3.71586 3.71586C2.6787 4.43857 2 5.64003 2 7V17C2 19.2091 3.79086 21 6 21H18C18.8492 21 19.6365 20.7354 20.2841 20.2841M3.71586 3.71586L2 2M3.71586 3.71586L20.2841 20.2841M20.2841 20.2841L22 22M7 3H18C20.2091 3 22 4.79086 22 7V17C22 17.309 21.965 17.6098 21.8987 17.8987M14.4 10.4L18 8"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

MailSlientIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

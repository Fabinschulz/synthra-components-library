import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const BookOpenIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M12 6.03558V15.535M5 8C3.34315 8 2 9.34315 2 11V16C2 18.2091 3.79086 20 6 20H18C20.2091 20 22 18.2091 22 16V11C22 9.34315 20.6569 8 19 8M6.39603 4.00751C7.94889 4.17463 10.0352 4.62421 11.5218 5.6163C11.8075 5.80697 12.1925 5.80697 12.4782 5.6163C13.9648 4.62421 16.0511 4.17463 17.604 4.00751C18.3725 3.92481 19 4.53602 19 5.29012V12.8C19 13.5541 18.3725 14.1655 17.604 14.2482C16.0511 14.4153 13.9648 14.8649 12.4782 15.857C12.1925 16.0477 11.8075 16.0477 11.5218 15.857C10.0352 14.8649 7.94889 14.4153 6.39603 14.2482C5.6275 14.1655 5 13.5541 5 12.8V5.29012C5 4.53602 5.6275 3.92481 6.39603 4.00751Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

BookOpenIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

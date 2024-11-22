import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const StarBadgeOffIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path d="M21 21L3 3" stroke={htmlColor} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path
        d="M14.3952 14.3952V16.5377C14.3952 16.9663 14.5352 17.3853 14.7975 17.7418L16.6841 20.3065C17.3654 21.2326 16.2505 22.3771 15.1521 21.8794L13.0712 20.9364C12.3969 20.6309 11.6031 20.6309 10.9288 20.9364L8.84792 21.8794C7.74947 22.3771 6.63464 21.2326 7.31587 20.3065L9.20251 17.7418C9.46481 17.3853 9.60478 16.9663 9.60478 16.5377V13.9389C9.60478 13.3395 9.0686 12.8536 8.40718 12.8536H4.19974C2.99651 12.8536 2.54467 11.4258 3.565 10.8478L8.21435 8.21435M9.60478 5.60478V4.39522C9.60478 3.07237 10.6772 2 12 2C13.3228 2 14.3952 3.07237 14.3952 4.39522V6.22367C14.3952 6.97211 14.8207 7.66776 15.521 8.06443L20.435 10.8478C21.4553 11.4258 21.0035 12.8536 19.8003 12.8536H16.8536"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

StarBadgeOffIcon.defaultProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  height: '24px',
  width: '24px'
};

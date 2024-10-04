import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const NewRuleIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        d="M9.36727 2.50473C11.3736 0.498426 14.6264 0.498423 16.6327 2.50472L23.4953 9.36727C25.5016 11.3736 25.5016 14.6264 23.4953 16.6327L16.6327 23.4953C14.6264 25.5016 11.3736 25.5016 9.36727 23.4953L2.50473 16.6327C0.498426 14.6264 0.498423 11.3736 2.50472 9.36727L9.36727 2.50473Z"
        stroke={htmlColor}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M14.6972 8.19995L16.2486 9.75142C16.7173 10.2201 16.7173 10.9798 16.2486 11.4485L14.6972 13M15.8972 10.6L13.0001 10.6C11.6746 10.6 10.6001 11.6745 10.6001 13V17.7999"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

NewRuleIcon.defaultProps = {
  viewBox: '0 0 26 26',
  width: '26',
  height: '26',
  fill: 'none'
};

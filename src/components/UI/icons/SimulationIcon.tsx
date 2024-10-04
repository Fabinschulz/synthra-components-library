import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const SimulationIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        stroke={htmlColor}
        d="M20 22H4C2.34315 22 1 20.6569 1 19V5C1 3.34315 2.34315 2 4 2H20C21.6569 2 23 3.34315 23 5V19C23 20.6569 21.6569 22 20 22Z"
        strokeWidth="2"
        fill="none"
      />
      <path
        stroke={htmlColor}
        d="M5 14.8909L6.2041 12.8955C7.2125 11.2244 7.7167 10.3889 8.25928 10.1509C8.90067 9.86965 9.63713 9.98721 10.1708 10.4561C10.6223 10.8527 10.8694 11.8082 11.3636 13.7192L11.5163 14.3093C11.6342 14.7653 11.6932 14.9934 11.7661 15.1164C12.0694 15.6278 12.7336 15.7338 13.1668 15.34C13.271 15.2453 13.3913 15.0459 13.632 14.647C13.9836 14.0643 14.1595 13.7729 14.3343 13.6013C15.051 12.8979 16.1612 12.8979 16.8778 13.6013C17.0527 13.7729 17.2285 14.0643 17.5801 14.647L19 17"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

SimulationIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

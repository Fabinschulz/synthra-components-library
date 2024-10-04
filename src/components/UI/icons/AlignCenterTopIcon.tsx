import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const AlignCenterTopIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M12 2V5M12 11V13M12 19V22M18 13.5L6 13.5C4.89543 13.5 4 14.3954 4 15.5L4 17C4 18.1046 4.89543 19 6 19L18 19C19.1046 19 20 18.1046 20 17V15.5C20 14.3954 19.1046 13.5 18 13.5ZM15 5L9 5C7.89543 5 7 5.89543 7 7L7 8.5C7 9.60457 7.89543 10.5 9 10.5L15 10.5C16.1046 10.5 17 9.60457 17 8.5V7C17 5.89543 16.1046 5 15 5Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

AlignCenterTopIcon.defaultProps = {
  viewBox: '0 0 29 25',
  width: '29',
  height: '25',
  fill: 'none'
};

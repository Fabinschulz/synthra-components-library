import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UsersCommunityIcon: FunctionComponent<SvgIconProps> = (props) => {
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
        <circle cx="6" cy="4" r="2" stroke={htmlColor} strokeWidth="2" />
        <ellipse cx="6" cy="8" rx="3" ry="2" stroke={htmlColor} strokeWidth="2" />
        <circle cx="18" cy="16" r="2" stroke={htmlColor} strokeWidth="2" />
        <path
          d="M22 12C22 6.47715 17.5228 2 12 2M12 22C6.47715 22 2 17.5228 2 12"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <ellipse cx="18" cy="20" rx="3" ry="2" stroke={htmlColor} strokeWidth="2" />
      </svg>
    </SvgIcon>
  );
};

UsersCommunityIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

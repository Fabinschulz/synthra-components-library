import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const AssignmentIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;
  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14 21H12C9.79086 21 8 19.2091 8 17V7C8 4.79086 9.79086 3 12 3H18C20.2091 3 22 4.79086 22 7V14M2 7H5M12 7H18M12 11H18M12 15H15M16 19L17.7528 20.4023C18.1707 20.7366 18.7777 20.6826 19.1301 20.2799L22 17M3.5 21L4.2 20.0667C4.71929 19.3743 5 18.5321 5 17.6667V4.5C5 3.67157 4.32843 3 3.5 3C2.67157 3 2 3.67157 2 4.5V17.6667C2 18.5321 2.28071 19.3743 2.8 20.0667L3.5 21Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

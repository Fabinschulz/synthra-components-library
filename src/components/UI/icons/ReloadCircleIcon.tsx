import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ReloadCircleIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M13.7857 6L14.5807 8.00215C13.8273 7.57761 12.9442 7.33333 12 7.33333C9.23858 7.33333 7 9.42267 7 12C7 12.4149 7.058 12.8171 7.16686 13.2M10.2143 18L9.41931 15.9978C10.1727 16.4224 11.0558 16.6667 12 16.6667C14.7614 16.6667 17 14.5773 17 12C17 11.5851 16.942 11.1829 16.8331 10.8"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="10" stroke={htmlColor} strokeWidth="2" />
      </svg>
    </SvgIcon>
  );
};

ReloadCircleIcon.defaultProps = {
  viewBox: '0 0 24 25',
  width: '24',
  height: '25',
  fill: 'none'
};

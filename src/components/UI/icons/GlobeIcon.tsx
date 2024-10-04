import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const GlobeIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M20.5354 16.1066C19.6068 17.0352 18.5044 17.7718 17.2912 18.2743C16.0779 18.7769 14.7776 19.0355 13.4644 19.0355M13.4644 19.0355C12.1511 19.0355 10.8508 18.7769 9.63752 18.2743C8.42426 17.7718 7.32187 17.0352 6.39329 16.1066C5.4647 15.178 4.72811 14.0756 4.22556 12.8624C3.72301 11.6491 3.46436 10.3488 3.46436 9.03555C3.46436 7.72233 3.72301 6.42197 4.22556 5.20871C4.72811 3.99546 5.4647 2.89306 6.39329 1.96448M13.4644 19.0355L13.4646 22.0355M13.4646 22.0355H10.4646M13.4646 22.0355H16.4646M20.4646 9.03555C20.4646 12.9015 17.3306 16.0356 13.4646 16.0356C9.59858 16.0356 6.46458 12.9015 6.46458 9.03555C6.46458 5.16956 9.59858 2.03555 13.4646 2.03555C17.3306 2.03555 20.4646 5.16956 20.4646 9.03555Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

GlobeIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

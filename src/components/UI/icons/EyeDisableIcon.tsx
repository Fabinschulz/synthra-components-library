import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const EyeDisableIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M4.00006 4L20.0001 20M14.0001 14.2361C13.4693 14.7111 12.7684 15 12.0001 15C10.3432 15 9.00006 13.6569 9.00006 12C9.00006 11.2316 9.28891 10.5308 9.76395 10M19.6078 15.6077C20.1792 15.1103 20.6903 14.6099 21.1304 14.1469C22.29 12.9268 22.29 11.0732 21.1304 9.8531C19.1746 7.79533 15.8156 5 12.0001 5C11.1087 5 10.2422 5.15256 9.41276 5.41264M6.50006 6.80338C5.0415 7.73444 3.7977 8.87678 2.86977 9.8531C1.71016 11.0732 1.71016 12.9268 2.86977 14.1469C4.82555 16.2047 8.18455 19 12.0001 19C13.8681 19 15.6268 18.3299 17.1649 17.4044"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </SvgIcon>
  );
};

EyeDisableIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

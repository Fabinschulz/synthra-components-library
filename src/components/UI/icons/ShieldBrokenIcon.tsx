import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ShieldBrokenIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path d="M3 3L21 21" stroke={htmlColor} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path
        d="M9.30341 5.30324C13.1634 4.43045 17.1592 5.44173 20.7044 8.3371C21.4771 8.96823 21.5582 10.0966 20.9643 10.8984L18.3832 14.383M6.35446 6.35429C5.30839 6.86869 4.28465 7.52962 3.29596 8.3371C2.52319 8.96823 2.44212 10.0966 3.03601 10.8984L10.3931 20.8304C11.1926 21.9098 12.8077 21.9098 13.6073 20.8304L16.681 16.6809"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

ShieldBrokenIcon.defaultProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  height: '24px',
  width: '24px'
};

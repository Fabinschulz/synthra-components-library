import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const RulerIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 26 26" width="26" height="26" fill="none" {...props}>
      <path
        d="M20.4834 9.2583L22.3543 11.1291M16.7417 13L18.6125 14.8708M13.0001 16.7417L14.8709 18.6125M9.25844 20.4834L11.1293 22.3542M9.25831 24.2251L24.2251 9.25831C25.2583 8.22507 25.2583 6.54986 24.2251 5.51662L20.4834 1.77493C19.4501 0.74169 17.7749 0.74169 16.7417 1.77493L1.77493 16.7417C0.74169 17.7749 0.74169 19.4501 1.77493 20.4834L5.51662 24.2251C6.54986 25.2583 8.22507 25.2583 9.25831 24.2251Z"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

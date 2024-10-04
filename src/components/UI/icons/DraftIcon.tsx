import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const DraftIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        d="M21 6L12 10L3 6"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M19.611 4.34882L13.611 1.70882C12.5845 1.25717 11.4155 1.25717 10.389 1.70882L4.38905 4.34882C2.93722 4.98762 2 6.42393 2 8.01008V15.9899C2 17.5761 2.93722 19.0124 4.38904 19.6512L10.389 22.2912C11.4155 22.7428 12.5845 22.7428 13.611 22.2912L19.611 19.6512C21.0628 19.0124 22 17.5761 22 15.9899V8.01008C22 6.42393 21.0628 4.98762 19.611 4.34882Z"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 10V22"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

DraftIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const DocExcelIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        d="M12 1H19C21.2091 1 23 2.79086 23 5V8.11765M12 1H5C2.79086 1 1 2.79086 1 5V8.11765M12 1V23M12 23H5C2.79086 23 1 21.2091 1 19V15.8824M12 23H19C21.2091 23 23 21.2091 23 19V15.8824M1 15.8824H23M1 15.8824V11.3529V8.11765M23 15.8824V11.3529V8.11765M1 8.11765H23"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

DocExcelIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

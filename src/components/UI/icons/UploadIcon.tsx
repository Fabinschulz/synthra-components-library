import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UploadIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <path
        d="M8.7 13.5556L10.4444 11.8817C11.3035 11.0572 12.6965 11.0572 13.5556 11.8817L15.3 13.5556M12 11.4444V16.7222M23 10.3889V17.7778C23 20.1096 21.0301 22 18.6 22H5.4C2.96995 22 1 20.1096 1 17.7778V7.22222C1 4.89035 2.96995 3 5.4 3H8.33333C9.28536 3 10.2117 3.29631 10.9733 3.84444L13.0267 5.32222C13.7883 5.87036 14.7146 6.16667 15.6667 6.16667H18.6C21.0301 6.16667 23 8.05702 23 10.3889Z"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

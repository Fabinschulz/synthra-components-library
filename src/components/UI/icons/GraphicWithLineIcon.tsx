import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const GraphicWithLineIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M2 9L4.61233 10.9592C5.40857 11.5564 6.52276 11.4772 7.22654 10.7735L8.03788 9.96212C9.00317 8.99683 10.6305 9.26091 11.241 10.4819L12.759 13.5181C13.3695 14.7391 14.9968 15.0032 15.9621 14.0379L16.7735 13.2265C17.4772 12.5228 18.5914 12.4436 19.3877 13.0408L22 15M6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

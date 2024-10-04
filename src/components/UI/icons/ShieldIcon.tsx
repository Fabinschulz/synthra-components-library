import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ShieldIcon: FunctionComponent<SvgIconProps> = (props) => {
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
          d="M10.3755 2.72201L5.37764 4.94327C3.93202 5.58577 2.97803 7.02461 3.07002 8.6039C3.42965 14.7781 5.2377 17.4963 9.93582 20.6769C11.1804 21.5195 12.821 21.5216 14.0647 20.6776C18.7772 17.4796 20.5206 14.7231 20.9118 8.62529C21.0138 7.03555 20.0583 5.58144 18.6026 4.93446L13.6246 2.72201C12.5903 2.26234 11.4097 2.26234 10.3755 2.72201Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 12C15 13.6568 13.6569 15 12 15C10.3432 15 9.00002 13.6568 9.00002 12C9.00002 10.3431 10.3432 8.99999 12 8.99999C13.6569 8.99999 15 10.3431 15 12Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

ShieldIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UserGroupIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737', fill = 'none' } = props;

  return (
    <SvgIcon {...props}>
      <ellipse
        cx="10"
        cy="17.5"
        rx="7"
        ry="3.5"
        stroke={htmlColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill={fill}
      />
      <circle
        cx="10"
        cy="7"
        r="4"
        stroke={htmlColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.0447 10.2496C14.7227 10.7485 14.3286 11.1965 13.8773 11.5791C14.2318 11.6901 14.6089 11.75 15 11.75C17.0711 11.75 18.75 10.0711 18.75 7.99999C18.75 6.04422 17.2528 4.43814 15.342 4.26538C15.6082 4.78435 15.801 5.34717 15.9067 5.94015C16.6978 6.28887 17.25 7.07994 17.25 7.99999C17.25 9.2277 16.2667 10.2257 15.0447 10.2496Z"
        fill={htmlColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.9995 17.5563C18.9895 18.1705 18.8146 18.7606 18.5008 19.3109C18.8692 19.2095 19.2143 19.0921 19.5311 18.9601C20.1282 18.7113 20.6604 18.3959 21.0548 18.0074C21.4519 17.6163 21.75 17.1065 21.75 16.5C21.75 15.8936 21.4519 15.3837 21.0548 14.9926C20.6604 14.6041 20.1282 14.2887 19.5311 14.0399C18.5085 13.6138 17.1906 13.3394 15.7494 13.2684C16.7516 13.7775 17.5701 14.417 18.135 15.1443C18.4327 15.2275 18.7071 15.3216 18.9542 15.4246C19.4428 15.6282 19.7893 15.8515 20.0022 16.0612C20.2124 16.2683 20.25 16.4161 20.25 16.5C20.25 16.5839 20.2124 16.7318 20.0022 16.9388C19.796 17.142 19.4643 17.3579 18.9995 17.5563Z"
        fill={htmlColor}
      />
    </SvgIcon>
  );
};

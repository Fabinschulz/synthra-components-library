import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const StudentsIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="19"
        viewBox="0 0 22 19"
        fill="none"
      >
        <path
          d="M14.4383 9.82805V8.7844L15.6483 9.32856C16.1783 9.56691 16.7858 9.56294 17.3126 9.31768L18.5579 8.73801V9.82805C18.5579 10.9656 17.6357 11.8878 16.4981 11.8879C15.3605 11.8879 14.4383 10.9657 14.4383 9.82805Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20.5217 7.41079L17.1002 5.89015C16.7073 5.71549 16.2587 5.71549 15.8657 5.89015L12.4443 7.41079C12.2437 7.49994 12.2437 7.7846 12.4443 7.87374L15.8657 9.39439C16.2587 9.56905 16.7073 9.56905 17.1002 9.39439L20.5217 7.87374C20.7223 7.7846 20.7223 7.49994 20.5217 7.41079Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.4706 13.4526C14.5737 13.4163 14.6793 13.3827 14.7874 13.3519C14.9627 13.302 15.1503 13.3556 15.2788 13.4813L16.1106 14.2951C16.3156 14.4956 16.6503 14.4956 16.8553 14.2951L17.6871 13.4813C17.8156 13.3556 18.0032 13.302 18.1785 13.3519C19.6474 13.7698 20.6721 14.7141 20.6721 15.812C20.6721 16.3716 20.2032 16.8252 19.6248 16.8252H15.6629"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="12.6445"
          y1="8.39227"
          x2="12.6445"
          y2="10.0586"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4.49801 7.83825V6.20216L6.76994 7.04885C7.22042 7.21674 7.71631 7.21674 8.16679 7.04885L10.4387 6.20216V7.83825C10.4387 9.47873 9.10885 10.8086 7.46837 10.8086C5.82789 10.8086 4.49801 9.47873 4.49801 7.83825Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M13.3881 4.07451L8.37304 1.84557C7.79702 1.58956 7.1395 1.58956 6.56348 1.84557L1.54837 4.07451C1.25437 4.20517 1.25437 4.62243 1.54837 4.75309L6.56348 6.98203C7.1395 7.23804 7.79702 7.23804 8.37304 6.98203L13.3881 4.75309C13.6821 4.62243 13.6821 4.20517 13.3881 4.07451Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.70324 12.991L6.92251 14.1838C7.22293 14.4777 7.71358 14.4777 8.014 14.1838L9.23327 12.991C9.42163 12.8067 9.6966 12.7282 9.95358 12.8013C12.1067 13.4138 13.6086 14.7979 13.6086 16.4072C13.6086 17.2274 12.9214 17.8924 12.0735 17.8924H2.86297C2.01516 17.8924 1.32787 17.2274 1.32787 16.4072C1.32787 14.7979 2.82986 13.4138 4.98293 12.8013C5.23992 12.7282 5.51489 12.8067 5.70324 12.991Z"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="2.20068"
          y1="5.28119"
          x2="2.20068"
          y2="8.30501"
          stroke={htmlColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

StudentsIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

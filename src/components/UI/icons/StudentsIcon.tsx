import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const StudentsIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;
  return (
    <SvgIcon {...props}>
      <path
        d="M15.4383 11.8281V10.7844L16.6483 11.3286C17.1783 11.5669 17.7858 11.5629 18.3126 11.3177L19.5579 10.738V11.8281C19.5579 12.9656 18.6357 13.8878 17.4981 13.8879C16.3605 13.8879 15.4383 12.9657 15.4383 11.8281Z"
        stroke={htmlColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M21.5217 9.41079L18.1002 7.89015C17.7073 7.71549 17.2587 7.71549 16.8657 7.89015L13.4443 9.41079C13.2437 9.49994 13.2437 9.7846 13.4443 9.87374L16.8657 11.3944C17.2587 11.569 17.7073 11.569 18.1002 11.3944L21.5217 9.87374C21.7223 9.7846 21.7223 9.49994 21.5217 9.41079Z"
        stroke={htmlColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M15.4706 15.4526C15.5737 15.4163 15.6793 15.3827 15.7874 15.3519C15.9627 15.302 16.1503 15.3556 16.2788 15.4813L17.1106 16.2951C17.3156 16.4956 17.6503 16.4956 17.8553 16.2951L18.6871 15.4813C18.8156 15.3556 19.0032 15.302 19.1785 15.3519C20.6474 15.7698 21.6721 16.7141 21.6721 17.812C21.6721 18.3716 21.2032 18.8252 20.6248 18.8252H16.6629"
        stroke={htmlColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1="13.6445"
        y1="10.3923"
        x2="13.6445"
        y2="12.0586"
        stroke={htmlColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M5.49801 9.83825V8.20216L7.76994 9.04885C8.22042 9.21674 8.71631 9.21674 9.16679 9.04885L11.4387 8.20216V9.83825C11.4387 11.4787 10.1088 12.8086 8.46837 12.8086C6.82789 12.8086 5.49801 11.4787 5.49801 9.83825Z"
        stroke={htmlColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M14.3881 6.07451L9.37304 3.84557C8.79702 3.58956 8.1395 3.58956 7.56348 3.84557L2.54837 6.07451C2.25437 6.20517 2.25437 6.62243 2.54837 6.75309L7.56348 8.98203C8.1395 9.23804 8.79702 9.23804 9.37304 8.98203L14.3881 6.75309C14.6821 6.62243 14.6821 6.20517 14.3881 6.07451Z"
        stroke={htmlColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M6.70324 14.991L7.92251 16.1838C8.22293 16.4777 8.71358 16.4777 9.014 16.1838L10.2333 14.991C10.4216 14.8067 10.6966 14.7282 10.9536 14.8013C13.1067 15.4138 14.6086 16.7979 14.6086 18.4072C14.6086 19.2274 13.9214 19.8924 13.0735 19.8924H3.86297C3.01516 19.8924 2.32787 19.2274 2.32787 18.4072C2.32787 16.7979 3.82986 15.4138 5.98293 14.8013C6.23992 14.7282 6.51489 14.8067 6.70324 14.991Z"
        stroke={htmlColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1="3.20068"
        y1="7.28119"
        x2="3.20068"
        y2="10.305"
        stroke={htmlColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

StudentsIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

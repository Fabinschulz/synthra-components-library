import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UY3Icon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M23.8417 14.812V21.7635C23.6231 24.6809 22.3643 27.5299 20.0503 29.6876C15.49 33.9497 8.35176 33.9497 3.79146 29.6876C1.47739 27.5223 0.218593 24.6733 0 21.7635V1.0228H5.36683V21.7559C5.64573 23.8072 6.86683 25.7521 9.03015 26.8614C10.8392 27.7882 13.0025 27.7882 14.804 26.8614C16.9673 25.7445 18.2412 23.7768 18.4673 21.7559V9.39507L23.8417 14.812ZM37.5603 0.908844L29.8719 8.65813L22.2965 1.0228H14.7437L27.1809 13.5584V32.6657H32.5251V13.5964L39.7764 6.28776H47.103L41.5025 11.9326L45.2789 15.7389L60 0.901245H37.5603V0.908844ZM54.196 29.1102C59.2085 24.0579 59.2085 15.83 54.196 10.7778L50.4196 14.5841C53.3518 17.5394 53.3518 22.3485 50.4196 25.3039C47.4874 28.2593 42.7161 28.2593 39.7839 25.3039L36.0075 29.1102C38.5176 31.6401 41.8116 32.9012 45.1055 32.9012C48.392 32.9012 51.6859 31.6325 54.196 29.1102Z"
        fill="url(#paint0_linear_315_326)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_315_326"
          x1="29.9941"
          y1="-4.20136"
          x2="29.9941"
          y2="52.6652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F36D21" />
          <stop offset="1" stopColor="#D34A00" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

UY3Icon.defaultProps = {
  viewBox: '0 0 60 33',
  width: '60',
  height: '33',
  fill: 'none'
};

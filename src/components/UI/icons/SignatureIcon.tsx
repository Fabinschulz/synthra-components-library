import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const SignatureIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <path
        d="M1 23H23M14.1809 3.82543C14.1809 3.82543 14.1809 5.8233 16.1788 7.82118C18.1767 9.81905 20.1746 9.81905 20.1746 9.81905M6.27954 19.3188L10.4751 18.7194C11.0803 18.6329 11.6411 18.3525 12.0734 17.9202L22.1725 7.82117C23.2758 6.71778 23.2758 4.92882 22.1725 3.82542L20.1746 1.82755C19.0712 0.724151 17.2822 0.724151 16.1788 1.82755L6.07975 11.9266C5.64747 12.3589 5.36706 12.9197 5.28061 13.5249L4.68124 17.7205C4.54805 18.6528 5.3472 19.4519 6.27954 19.3188Z"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};

import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const BankingIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon {...props}>
      <path
        d="M12 1.90125L12 2.90125L12 3.90125"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 21.9012L12 22.9012L12 23.9012"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M19 8.40125C19 7.8103 18.8707 7.22514 18.6194 6.67917C18.3681 6.1332 17.9998 5.63713 17.5355 5.21926C17.0712 4.8014 16.52 4.46993 15.9134 4.24379C15.3068 4.01764 14.6566 3.90125 14 3.90125L9.5 3.90125C8.17392 3.90125 6.90215 4.37535 5.96447 5.21926C5.02678 6.06318 4.5 7.20777 4.5 8.40125C4.5 9.59472 5.02678 10.7393 5.96447 11.5832C6.90215 12.4271 8.17392 12.9012 9.5 12.9012L15 12.9012C16.3261 12.9012 17.5979 13.3754 18.5355 14.2193C19.4732 15.0632 20 16.2078 20 17.4012C20 18.5947 19.4732 19.7393 18.5355 20.5832C17.5979 21.4271 16.3261 21.9012 15 21.9012L9 21.9012C7.67392 21.9012 6.40215 21.4271 5.46447 20.5832C4.52678 19.7393 4 18.5947 4 17.4012"
        stroke={htmlColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

BankingIcon.defaultProps = {
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none'
};

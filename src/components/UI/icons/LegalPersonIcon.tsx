import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const LegalPersonIcon: FunctionComponent<SvgIconProps> = (props) => {
  const { htmlColor = '#373737' } = props;

  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <path
        stroke={htmlColor}
        fill="none"
        d="M7 5V4.56844C7 3.14928 8.41163 2 10.1547 2H13.8438C15.5855 2 16.9986 3.14928 16.9986 4.56844L17 5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        stroke={htmlColor}
        fill="none"
        d="M1 11.8011V9.6159C1 7.61285 2.63364 6 4.64922 6H19.3627C21.3783 6 23 7.61285 23 9.6159V11.8011M1 11.8011C3.2821 13.2969 6.01633 14.3446 9.01709 14.7596C9.37642 13.4577 10.5579 12.5035 11.9941 12.5035C13.4076 12.5035 14.6129 13.4577 14.9484 14.7714C17.9611 14.3564 20.706 13.3087 23 11.8011M1 11.8011V18C1 20.2091 2.79086 22 5 22H19C21.2091 22 23 20.2091 23 18V11.8011"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

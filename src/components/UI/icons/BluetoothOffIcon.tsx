import type { FunctionComponent } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const BluetoothOffIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" height="24px" width="24px" {...props}>
      <path d="M20 20L4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.2501 10.3107V11.5986L5.58405 15.376C5.23941 15.6057 5.14628 16.0714 5.37604 16.416C5.60581 16.7607 6.07146 16.8538 6.4161 16.6241L11.2501 13.4014V18.865C11.2501 20.3487 12.9806 21.1592 14.1204 20.2094L17.9541 17.0147L16.889 15.9496L13.1601 19.057C12.9973 19.1927 12.7501 19.0769 12.7501 18.865V12.4014L13.1045 12.1651L11.2501 10.3107ZM18.5238 15.4631L18.5358 15.475C18.5318 15.471 18.5278 15.467 18.5238 15.4631ZM14.3773 11.3166L13.2956 10.2349L16.4697 8.11887C16.6088 8.02617 16.6195 7.82579 16.4911 7.7188L13.1601 4.943C12.9973 4.80731 12.7501 4.9231 12.7501 5.13506V9.68936L11.2501 8.18936V5.13506C11.2501 3.65134 12.9806 2.84082 14.1204 3.79067L17.4514 6.56647C18.35 7.31535 18.2751 8.71807 17.3018 9.36695L14.3773 11.3166Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

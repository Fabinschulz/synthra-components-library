import React, { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

import './styled-link-button.css';

interface ILinkButton extends LinkProps {
  children: ReactNode;
}

const LinkButton = ({ children, ...props }: ILinkButton) => {
  return (
    <Link {...props} className="linkButton">
      {children}
    </Link>
  );
};

export default LinkButton;

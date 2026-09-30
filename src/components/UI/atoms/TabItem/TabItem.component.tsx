'use client';
import type { FunctionComponent } from 'react';
import type { TabItemProps } from './TabItem.interface';
import { Tab } from './TabItem.styled';

const TabItem: FunctionComponent<TabItemProps> = ({ label, href, ...props }) => {
  const linkProps = (href ? { href } : {}) as object;
  return <Tab label={label} {...props} {...linkProps} />;
};

export default TabItem;

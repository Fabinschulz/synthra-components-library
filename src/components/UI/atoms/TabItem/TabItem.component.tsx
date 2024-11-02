'use client';
import type { FunctionComponent } from 'react';
import type { TabItemProps } from './TabItem.interface';
import { Tab } from './TabItem.styled';

const TabItem: FunctionComponent<TabItemProps> = ({ label, ...props }) => {
  return <Tab label={label} {...props} />;
};

export default TabItem;

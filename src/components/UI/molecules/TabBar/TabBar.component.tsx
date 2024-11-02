'use client';
import type { FunctionComponent } from 'react';
import type { TabBarProps, TabPanelProps } from './TabBar.interface';
import { useState } from 'react';
import { Box, Link } from '@mui/material';
import { Tabs } from './TabBar.styled';
import { TabItem } from '../../atoms/TabItem';
import { usePathname } from 'next/navigation';

const TabPanel: FunctionComponent<TabPanelProps> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const TabBar: FunctionComponent<TabBarProps> = ({ tabs, variant, orientation, children }) => {
  const pathname = usePathname() ?? '';
  const [value, setValue] = useState(0);
  const target = tabs?.[0].href ?? '';

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  let activeTab =
    tabs?.length &&
    tabs.findIndex(
      (tab) => pathname.endsWith(tab.href ?? '') || `${pathname}/`.endsWith(tab.href ?? '')
    );

  const path = pathname.split('/').slice(0, -1).join('/');

  if (activeTab === -1) {
    activeTab = (tabs?.length && tabs.findIndex((tab) => path.endsWith(tab.href ?? ''))) ?? 0;
  }

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs
          value={activeTab ?? value}
          variant={variant}
          orientation={orientation}
          onChange={handleChange}
          scrollButtons
          allowScrollButtonsMobile
        >
          {tabs?.map((tab) => {
            const firtsTab = tab.href === target;
            return (
              <TabItem
                key={tab.label}
                label={tab.label}
                component={Link}
                to={firtsTab ? '' : tab.href}
              />
            );
          })}
        </Tabs>
      </Box>
      {tabs?.map((tab, index) => (
        <TabPanel key={tab.label} value={activeTab ?? value} index={index}>
          {childrenArray[index]}
        </TabPanel>
      ))}
    </Box>
  );
};

export default TabBar;

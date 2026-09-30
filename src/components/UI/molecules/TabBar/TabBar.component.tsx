'use client';
import type { FunctionComponent } from 'react';
import type { TabBarProps, TabPanelProps } from './TabBar.interface';
import { useId, useState } from 'react';
import { Box } from '@mui/material';
import { Tabs } from './TabBar.styled';
import { TabItem } from '../../atoms/TabItem';

const TabPanel: FunctionComponent<TabPanelProps & { baseId: string }> = ({
  children,
  value,
  index,
  baseId,
  ...other
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${baseId}-tabpanel-${index}`}
      aria-labelledby={`${baseId}-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const findActiveTab = (tabs: TabBarProps['tabs'], pathname: string) => {
  const matches = (path: string) =>
    tabs.findIndex((tab) => !!tab.href && (path.endsWith(tab.href) || `${path}/`.endsWith(tab.href)));

  const exact = matches(pathname);
  if (exact !== -1) return exact;
  return matches(pathname.split('/').slice(0, -1).join('/'));
};

const TabBar: FunctionComponent<TabBarProps> = ({
  tabs,
  variant,
  orientation,
  scrollButtons = true,
  pathname,
  children
}) => {
  const baseId = useId();
  const [selected, setSelected] = useState(0);

  const routeTab = pathname !== undefined ? findActiveTab(tabs ?? [], pathname) : -1;
  const activeTab = routeTab !== -1 ? routeTab : selected;

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs
          value={activeTab}
          variant={variant}
          orientation={orientation}
          onChange={(_, newValue: number) => setSelected(newValue)}
          scrollButtons={scrollButtons}
          allowScrollButtonsMobile
        >
          {tabs?.map((tab, index) => (
            <TabItem
              key={tab.href ?? tab.label ?? index}
              id={`${baseId}-tab-${index}`}
              aria-controls={`${baseId}-tabpanel-${index}`}
              label={tab.label}
              href={tab.href}
            />
          ))}
        </Tabs>
      </Box>
      {tabs?.map((tab, index) => (
        <TabPanel key={tab.href ?? tab.label ?? index} baseId={baseId} value={activeTab} index={index}>
          {childrenArray[index]}
        </TabPanel>
      ))}
    </Box>
  );
};

export default TabBar;

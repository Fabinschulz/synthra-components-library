import { MenuProps } from './Menu.interface';
import { DashboardIcon } from '../../icons/DashboardIcon';
import { ProfileBadgeIcon, SettingIcon } from '../../icons';

export const menuMock: MenuProps = {
  logoIcon: <p>Logo</p>,
  items: [
    {
      title: 'Home',
      href: '/',
      icon: <DashboardIcon />,
      active: true
    },
    {
      title: 'Dashboard',
      href: '/',
      icon: <DashboardIcon />
    },
    {
      title: 'Profile',
      href: '/profile',
      icon: <ProfileBadgeIcon />,
      active: false
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: <SettingIcon />,
      active: false
    }
  ],
  activateAutoOutsideMenu: true,
  onClickLogout: () => console.log('Logout')
};

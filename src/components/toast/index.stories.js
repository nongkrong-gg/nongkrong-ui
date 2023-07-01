import Toast from './index';

export default {
  component: Toast,
  title: 'Toast',
};

export const Primary = {
  args: {
    primary: true,
    icon: 'calendar',
    title: 'Senin, 29 Mei 2023',
    description: '4.00 PM',
  },
};

export const Secondary = {
  args: {
    secondary: true,
    icon: 'calendar-check',
    subIcon: 'calendar',
    title: 'Nongs',
    subtitle: '24 April 2023',
  },
};

export const Tertiary = {
  args: {
    tertiary: true,
    subIcon: 'chevron-right',
    title: 'Udah checkin',
    description: '5 Undangan',
  },
};

export const Multiple = {
  args: {
    primary: true,
    multiple: true,
    icon: 'calendar',
    subIcon: 'user-check',
    title: 'Kumpul Aja',
    subtitle: '10 Gaskeun',
  },
};

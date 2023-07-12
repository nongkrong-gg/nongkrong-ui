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

export const WithInfo = {
  args: {
    primary: true,
    icon: 'calendar',
    title: 'Senin, 29 Mei 2023',
    description: '4.00 PM',
    info: '+ 5 Lainnya sudah gaskeun',
    infoIcons: [
      'https://api.dicebear.com/6.x/micah/svg?seed=10-indirect_rose_lark&size=24&backgroundColor=b6e3f4%2Cc0aede%2Cd1d4f9%2Cffd5dc%2Cffdfbf&radius=50',
      'https://api.dicebear.com/6.x/micah/svg?seed=1_remarkable_moccasin_junglefowl&size=24&backgroundColor=b6e3f4%2Cc0aede%2Cd1d4f9%2Cffd5dc%2Cffdfbf&radius=50',
      'https://api.dicebear.com/6.x/micah/svg?seed=6-uncomfortable_violet_snail&size=24&backgroundColor=b6e3f4%2Cc0aede%2Cd1d4f9%2Cffd5dc%2Cffdfbf&radius=50',
      'https://api.dicebear.com/6.x/micah/svg?seed=15-prospective_black_toucan&size=24&backgroundColor=b6e3f4%2Cc0aede%2Cd1d4f9%2Cffd5dc%2Cffdfbf&radius=50',
    ],
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

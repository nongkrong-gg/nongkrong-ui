import CTA from './index';

export default {
  component: CTA,
  title: 'CTA',
};

export const Primary = {
  args: {
    primary: true,
    icon: 'pen-to-square',
    title: 'Bikin Wacana',
    description: 'Tentuin tema acara dan waktunya',
    cta: 'Tap untuk bikin',
  },
};

export const Secondary = {
  args: {
    secondary: true,
    icon: 'calendar-days',
    title: 'Checkin',
    description: 'Udah diundang? yuk konfirmasi',
    cta: 'Tap untuk Checkin',
  },
};

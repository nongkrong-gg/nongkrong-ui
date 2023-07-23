import googlePNG from 'assets/icons/google.png';
import Button from './index';

export default {
  component: Button,
  title: 'Button',
};

export const Primary = {
  args: {
    primary: true,
    children: <>Yakin dong</>,
    iconRight: 'thumbs-up',
  },
};

export const Secondary = {
  args: {
    secondary: true,
    children: <>Salin Link</>,
    iconRight: 'link',
  },
};

export const Tertiary = {
  args: {
    tertiary: true,
    children: <>Gunakan Akun Google</>,
    iconLeft: googlePNG,
  },
};

export const Quaternary = {
  args: {
    quaternary: true,
    children: <>Buat Reminder</>,
    iconRight: 'calendar-plus',
  },
};

export const Disabled = {
  args: {
    primary: true,
    disabled: true,
    children: <>Disabled</>,
  },
};

export const Small = {
  args: {
    quaternary: true,
    small: true,
    children: <>Edit</>,
    iconRight: 'pen-to-square',
  },
};

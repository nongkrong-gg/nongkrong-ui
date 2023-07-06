import Subheading from './index';

export default {
  component: Subheading,
  title: 'Subheading',
};

export const Primary = {
  args: {
    primary: true,
    children: (
      <>
        Akun kamu udah jadi nih, sekarang kamu bisa buat undangan,
        atau akses undangan langsung dari sini 👌
      </>
    ),
  },
};
export const Secondary = {
  args: {
    secondary: true,
    children: (
      <>
        Kamu berhasil membuat wacana, jangan lupa buat undang
        temanmu dengan membagikan link wacana ini ya 😉
      </>
    ),
  },
};
export const Tertiary = {
  args: {
    tertiary: true,
    children: (
      <>
        Ngapain kek yuk, kemana gitu. Jangan lupa ajak yang lain juga, atau udah punya wacana?
      </>
    ),
  },
};

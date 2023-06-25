import Input from './index';

export default {
  component: Input,
  title: 'Input',
};

export const Text = {
  args: {
    type: 'text',
    name: 'title',
    placeholder: 'Tema wacananya apa?',
    info: 'Tambahin detail (optional)',
    infoInput: 'description',
    infoIcon: 'file-lines',
  },
};

export const Email = {
  args: {
    type: 'email',
    name: 'email',
    placeholder: 'email kamu apa?',
    icon: 'envelope',
  },
};

export const Username = {
  args: {
    secondary: true,
    type: 'text',
    name: 'username',
    placeholder: 'siapa nama kamu?',
    icon: 'user',
  },
};

export const Password = {
  args: {
    type: 'password',
    name: 'password',
    placeholder: 'Passwordin yuk, biar aman',
  },
};

export const Date = {
  args: {
    secondary: true,
    type: 'date',
    name: 'date',
  },
};

export const Time = {
  args: {
    secondary: true,
    type: 'time',
    name: 'time',
  },
};

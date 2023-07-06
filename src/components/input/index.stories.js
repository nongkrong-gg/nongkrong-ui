import { useState } from 'react';
import Input from './index';

export default {
  component: Input,
  title: 'Input',
};

function InputComponent(props) {
  const [value, setValue] = useState('');
  const [subValue, setSubValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  return (
    <Input
      value={value}
      subValue={subValue}
      isValid={isValid}
      setValue={setValue}
      setSubValue={setSubValue}
      setIsValid={setIsValid}
      {...props}
    />
  );
}

export const Text = {
  render: () => (
    <InputComponent
      type="text"
      name="title"
      placeholder="Tema wacananya apa?"
      info="Tambahin detail (optional)"
      infoInput="description"
      infoIcon="file-lines"
    />
  ),
};

export const Email = {
  render: () => (
    <InputComponent
      type="email"
      name="email"
      placeholder="email kamu apa?"
      icon="envelope"
    />
  ),
};

export const Username = {
  render: () => (
    <InputComponent
      secondary
      type="text"
      name="username"
      placeholder="siapa nama kamu?"
      icon="user"
    />
  ),
};

export const Password = {
  render: () => (
    <InputComponent
      type="password"
      name="password"
      placeholder="Passwordin yuk, biar aman"
    />
  ),
};

export const Date = {
  render: () => (
    <InputComponent
      secondary
      type="date"
      name="date"
    />
  ),
};

export const Time = {
  render: () => (
    <InputComponent
      secondary
      type="time"
      name="time"
    />
  ),
};

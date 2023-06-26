import { useState } from 'react';
import { Input } from 'components/index';
import Carousel from './index';

export default {
  component: Carousel,
  title: 'Carousel',
};

function CarouselComponent() {
  const [value, setValue] = useState('');
  const [activeChar, setActiveChar] = useState(1);

  return (
    <>
      <Carousel
        seed={value}
        activeChar={activeChar}
        setActiveChar={setActiveChar}
      />
      <div style={{ height: '48px' }} />
      <Input
        value={value}
        setValue={setValue}
        secondary
        type="text"
        name="username"
        placeholder="siapa nama kamu?"
        icon="user"
      />
    </>
  );
}

export const Avatar = {
  render: () => <CarouselComponent />,
};

import { useState } from 'react';
import { Title, Button, Input } from 'components';
import Modal from './index';

export default {
  component: Modal,
  title: 'Modal',
};

function ModalComponent() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Button
        primary
        iconRight="fire"
        onClick={() => setIsOpen(true)}
      >
        Gaskeun lah
      </Button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <Title>Kamu OTW dari mana?</Title>
        <div style={{ height: '16px' }} />
        <Input
          secondary
          type="text"
          name="location"
          placeholder="Tulis lokasi kamu"
        />
      </Modal>
    </>
  );
}

export const Normal = {
  render: () => <ModalComponent />,
};

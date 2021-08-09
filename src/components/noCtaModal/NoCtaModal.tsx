import React from 'react';

// Components
import { Modal } from '../../themes/modal/Modal';
import { ModalContent } from '../../themes/modal/ModalContent';
import { ModalHeader } from '../../themes/modal/ModalHeader';

type ProfileModalProps = {
  onClose: () => void;
  isVisible: boolean;
  header: string;
  description: string;
};

export const NoCtaModal: React.FC<ProfileModalProps> = ({
  onClose,
  isVisible,
  header,
  description,
}) => {
  return (
    <Modal onClose={() => onClose()} isVisible={isVisible}>
      <ModalHeader onHeaderPress={() => onClose()} />
      <ModalContent header={header} description={description} />
    </Modal>
  );
};

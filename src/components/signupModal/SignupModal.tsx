import React from 'react';

// Components
import { Modal } from '../../themes/modal/Modal';
import { ModalContent } from '../../themes/modal/ModalContent';
import { ModalHeader } from '../../themes/modal/ModalHeader';
import { ModalFooter } from '../../themes/modal/ModalFooter';
import { Button } from '../button/Button';

type SignupModalProps = {
  onClose: () => void;
  isVisible: boolean;
  onSignupPress: () => void;
  onLoginPress: () => void;
};

export const SignupModal: React.FC<SignupModalProps> = ({
  onClose,
  isVisible,
  onSignupPress,
  onLoginPress,
}) => {
  return (
    <Modal onClose={() => onClose()} isVisible={isVisible}>
      <ModalHeader onHeaderPress={() => onClose()} />
      <ModalContent
        header="Welcome! 👋"
        description="To access all of A Life Lived please login or signup"
      />
      <ModalFooter>
        <Button
          title="Signup"
          onPress={() => onSignupPress()}
          width="50%"
          marginRight="s"
        />
        <Button
          title="Login"
          onPress={() => onLoginPress()}
          width="50%"
          marginLeft="s"
        />
      </ModalFooter>
    </Modal>
  );
};

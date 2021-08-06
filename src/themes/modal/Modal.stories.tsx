import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

// Component
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalFooter } from './ModalFooter';
import { Button } from '../../components/button/Button';
import { ModalContent } from './ModalContent';

storiesOf('Modal', module)
  .addDecorator(Story => Story())
  .add('Default', () => (
    <Modal onClose={action('Modal action fired')} isVisible={true}>
      <ModalHeader onHeaderPress={action('Header button pressed')} />
      <ModalContent
        header="Test content"
        description="This is the description of the test modal"
      />
      <ModalFooter>
        <Button
          title="Signup"
          onPress={action('Fire on press for button one')}
          width="40%"
          backgroundColor="primary"
          color="primary"
          marginRight="s"
        />
        <Button
          title="Login"
          onPress={action('Fire on press for button one')}
          width="40%"
          backgroundColor="primary"
          color="primary"
          marginRight="s"
        />
      </ModalFooter>
    </Modal>
  ))
  .add('With one cta button', () => (
    <Modal onClose={action('Modal action fired')} isVisible={true}>
      <ModalHeader onHeaderPress={action('Header button pressed')} />
      <ModalContent
        header="Test content"
        description="This is the description of the test modal"
      />
      <ModalFooter>
        <Button
          title="Signup"
          onPress={action('Fire on press for button one')}
          width="40%"
          backgroundColor="primary"
          color="primary"
          marginRight="s"
        />
      </ModalFooter>
    </Modal>
  ))
  .add('With header and content only', () => (
    <Modal onClose={action('Modal action fired')} isVisible={true}>
      <ModalHeader onHeaderPress={action('Header button pressed')} />
      <ModalContent
        header="Test content"
        description="This is the description of the test modal"
      />
    </Modal>
  ))
  .add('With footer only', () => (
    <Modal onClose={action('Modal action fired')} isVisible={true}>
      <ModalHeader onHeaderPress={action('Header button pressed')} />
      <ModalFooter>
        <Button
          title="Signup"
          onPress={action('Fire on press for button one')}
          width="40%"
          backgroundColor="primary"
          color="primary"
          marginRight="s"
        />
        <Button
          title="Login"
          onPress={action('Fire on press for button one')}
          width="40%"
          backgroundColor="primary"
          color="primary"
          marginRight="s"
        />
      </ModalFooter>
    </Modal>
  ));

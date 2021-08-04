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
  .add('Modal with header only', () => (
    <Modal onPress={action('Modal action fired')}>
      <ModalHeader header="This is testing the modal" />
      <ModalContent header="Test content" />
      <ModalFooter>
        <Button
          title="Test button one"
          onPress={action('Fire on press for button one')}
          width="50%"
          backgroundColor="primary"
          color="primary"
          marginRight="s"
        />
        <Button
          title="Test button two"
          onPress={action('Fire on press for button one')}
          width="50%"
          marginLeft="s"
        />
      </ModalFooter>
    </Modal>
  ));

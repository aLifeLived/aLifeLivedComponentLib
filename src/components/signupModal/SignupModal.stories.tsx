import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

// Component
import { SignupModal } from './SignupModal';

storiesOf('Modal', module)
  .addDecorator(Story => Story())
  .add('Signup', () => (
    <SignupModal
      isVisible={true}
      onClose={action('On close action fired')}
      onSignupPress={action('On signup press')}
      onLoginPress={action('On login press')}
    />
  ));

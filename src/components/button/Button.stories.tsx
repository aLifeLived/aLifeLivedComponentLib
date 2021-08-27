import React from 'react';

import { storiesOf } from '@storybook/react-native';
// Component
import { Button } from './Button';
import { action } from '@storybook/addon-actions';
import { CenterView } from '../centerView/CenterView';

storiesOf('Button', module)
  .addDecorator(Story => <CenterView>{Story()}</CenterView>)
  .add('Default button', () => (
    <Button
      title="Test button"
      onPress={action('Button on press fired')}
      width="50%"
    />
  ));

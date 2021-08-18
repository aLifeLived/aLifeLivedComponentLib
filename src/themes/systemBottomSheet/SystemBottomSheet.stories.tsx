import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

// Component
import { SystemBottomSheet } from './SystemBottomSheet';

storiesOf('Bottom sheet', module)
  .addDecorator(Story => Story())
  .add('Default bottom sheet with no children', () => (
    <SystemBottomSheet isVisible={true} onClose={action('On close fired')}>
      {}
    </SystemBottomSheet>
  ));

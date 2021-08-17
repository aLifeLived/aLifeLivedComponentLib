import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

// Component
import { EditAndDeleteBottomSheet } from './EditAndDeleteBottomSheet';

storiesOf('Bottom sheet', module)
  .addDecorator(Story => Story())
  .add('Edit and delete bottom sheet', () => (
    <EditAndDeleteBottomSheet
      isVisible={true}
      onRemoveStoryPress={action('Remove story press')}
      onEditStoryPress={action('Edit story press')}
    />
  ));

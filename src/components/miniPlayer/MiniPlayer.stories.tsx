import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

// Component
import { MiniPlayer } from './MiniPlayer';

storiesOf('Modal', module)
  .addDecorator(Story => Story())
  .add('profile', () => (
    <MiniPlayer
      isDisabled={false}
      title="This is an story title"
      username="Test username"
      avatar="https://picsum.photos/id/237/200/300"
      playerState="idle"
      onAudioPause={action('On audio pause action')}
      onAudioPlay={action('On audio play action')}
      onMiniPlayerPress={action('MiniPlayer pressed')}
    />
  ));

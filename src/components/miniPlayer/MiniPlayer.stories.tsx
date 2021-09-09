import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

// Component
import { MiniPlayer } from './MiniPlayer';

// UI
import { Box } from '../../themes/Box';

storiesOf('MiniPlayer', module)
  .addDecorator(Story => (
    <Box flex={1} backgroundColor="primary">
      <Box position="absolute" bottom={0} right={0} left={0}>
        {Story()}
      </Box>
    </Box>
  ))
  .add('Default', () => (
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

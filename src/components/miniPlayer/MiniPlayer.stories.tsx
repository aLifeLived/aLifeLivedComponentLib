import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';

// Component
import { MiniPlayer } from './MiniPlayer';

// UI
import { Box } from '../../themes/Box';

storiesOf('MiniPlayer', module)
  .addDecorator(Story => (
    <Box position="absolute" bottom={0} right={0} left={0}>
      {Story()}
    </Box>
  ))
  .add('Default', () => (
    <MiniPlayer
      isDisabled={boolean('Disabled', false)}
      title={text('Title', 'This is an story title')}
      username={text('Username', 'test_username')}
      avatar={text('Avatar', 'https://picsum.photos/id/237/200/300')}
      playerState={select(
        'Player state',
        { idle: 'idle', paused: 'paused', playing: 'playing' },
        'idle'
      )}
      onAudioPause={action('On audio pause action')}
      onAudioPlay={action('On audio play action')}
      onMiniPlayerPress={action('MiniPlayer pressed')}
    />
  ));

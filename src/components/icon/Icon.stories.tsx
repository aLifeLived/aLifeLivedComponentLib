import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';

// Component
import { Icon } from './Icon';
import { Box } from '../../themes/box/Box';

storiesOf('Icon', module)
  .addDecorator(Story => (
    <Box margin="m" flexDirection="row" flexWrap="wrap">
      {Story()}
    </Box>
  ))
  .add('Icons', () => (
    <>
      <Icon icon="chevron-left" margin="s" />
      <Icon icon="chevron-down" margin="s" />
      <Icon icon="chevron-right" margin="s" />
      <Icon icon="home" margin="s" />
      <Icon icon="microphone" margin="s" />
      <Icon icon="assistive-listening-systems" margin="s" />
      <Icon icon={['far', 'clock']} margin="s" />
      <Icon icon={['fas', 'clock']} margin="s" />
      <Icon icon="play" margin="s" />
      <Icon icon="pause" margin="s" />
      <Icon icon="user" margin="s" />
      <Icon icon="users" margin="s" />
      <Icon icon="times" margin="s" />
      <Icon icon={['far', 'heart']} margin="s" color="secondary" />
      <Icon icon={['fas', 'heart']} margin="s" color="secondary" />
      <Icon icon={['far', 'bookmark']} margin="s" />
      <Icon icon={['fas', 'bookmark']} margin="s" />
      <Icon icon="search" margin="s" />
      <Icon icon="exclamation-circle" margin="s" color="secondary" />
      <Icon icon="check-circle" margin="s" color="primary" />
      <Icon icon="plus-circle" margin="s" color="primary" />
      <Icon icon="eye" margin="s" color="primary" />
      <Icon icon="eye-slash" margin="s" color="primary" />
      <Icon icon="pencil-alt" margin="s" color="primary" />
    </>
  ))
  .add('Pressable icons', () => (
    <>
      <Icon icon="play" margin="s" onPress={action('Play icon pressed')} />
      <Icon icon="pause" margin="s" onPress={action('Pause icon pressed')} />
      <Icon icon="times" margin="s" onPress={action('Times icon pressed')} />
      <Icon
        icon={['far', 'heart']}
        margin="s"
        color="secondary"
        onPress={action('Heart icon pressed')}
      />
      <Icon
        icon={['fas', 'heart']}
        margin="s"
        color="secondary"
        onPress={action('Heart icon pressed')}
      />
      <Icon
        icon={['far', 'bookmark']}
        margin="s"
        onPress={action('Bookmark icon pressed')}
      />
      <Icon
        icon={['fas', 'bookmark']}
        margin="s"
        onPress={action('Bookmark icon pressed')}
      />
      <Icon
        icon="plus-circle"
        margin="s"
        color="primary"
        onPress={action('Plus icon pressed')}
      />
    </>
  ));

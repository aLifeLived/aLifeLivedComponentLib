import React from 'react';
import { storiesOf } from '@storybook/react-native';

// Component
import { Avatar } from './Avatar';
import { Box } from '../../themes/box/Box';

storiesOf('Avatar', module)
  .addDecorator(Story => (
    <Box margin="s" justifyContent="center" alignItems="center">
      {Story()}
    </Box>
  ))
  .add('Round avatar', () => (
    <>
      <Avatar
        source={{ uri: '', priority: 'normal' }}
        variant="roundAvatar"
        margin="s"
      />
      <Avatar
        source={{
          uri: 'https://picsum.photos/id/237/200/300',
          priority: 'normal',
        }}
        variant="roundAvatar"
        margin="s"
      />
    </>
  ));

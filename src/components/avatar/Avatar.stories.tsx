import React from 'react';
import { storiesOf } from '@storybook/react-native';

// Component
import { Avatar } from './Avatar';
import { Box } from '../../themes/Box';

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
        variant="squareAvatar"
        margin="s"
        iconBorderRadius="xXXlarge"
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
  ))
  .add('Square avatar', () => (
    <>
      <Avatar
        source={{ uri: '', priority: 'normal' }}
        variant="squareAvatar"
        margin="s"
        iconBorderRadius="medium"
      />
      <Avatar
        source={{
          uri: 'https://picsum.photos/id/237/200/300',
          priority: 'normal',
        }}
        resizeMode="cover"
        variant="squareAvatar"
        margin="s"
      />
    </>
  ));

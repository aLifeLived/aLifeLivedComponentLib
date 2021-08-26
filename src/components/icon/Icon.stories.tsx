import React from 'react';

import { storiesOf } from '@storybook/react-native';
// Component
import { Icon } from './Icon';
import { Box } from '../../themes/Box';

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
      <Icon icon="times" margin="s" />
      <Icon icon={['far', 'heart']} margin="s" color="primaryRed" />
      <Icon icon={['fas', 'heart']} margin="s" color="primaryRed" />
      <Icon icon={['far', 'bookmark']} margin="s" />
      <Icon icon={['fas', 'bookmark']} margin="s" />
      <Icon icon="search" margin="s" />
      <Icon icon="exclamation-circle" margin="s" color="primaryRed" />
      <Icon icon="check-circle" margin="s" color="primary" />
      <Icon icon="plus-circle" margin="s" color="primary" />
    </>
  ));

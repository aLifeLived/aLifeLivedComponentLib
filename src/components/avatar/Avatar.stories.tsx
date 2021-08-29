import React from 'react';

import { storiesOf } from '@storybook/react-native';
// Component
import { Avatar } from './Avatar';
import { CenterView } from '../centerView/CenterView';

storiesOf('Avatar', module)
  .addDecorator(Story => <CenterView>{Story()}</CenterView>)
  .add('Default avatar', () => (
    <Avatar source={{ uri: 'test' }} variant="default" />
  ));

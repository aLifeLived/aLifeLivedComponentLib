import React from 'react';
import { storiesOf } from '@storybook/react-native';

// Component
import { Text } from './Text';
import { CenterView } from '../../components/centerView/CenterView';

storiesOf('Text', module)
  .addDecorator(Story => <CenterView children={Story()} />)
  .add('Text', () => (
    <>
      <Text variant="h1">H1 Heading</Text>
      <Text variant="h2">H2 Heading</Text>
      <Text variant="h3">H3 Heading</Text>
      <Text variant="h4">H4 Heading</Text>
      <Text variant="intro">Intro</Text>
      <Text variant="body">Body</Text>
      <Text variant="bodySmall">Body Small</Text>
      <Text variant="bodyXSmall">Body extra small</Text>
    </>
  ));

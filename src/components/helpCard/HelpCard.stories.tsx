import React from 'react';
import { storiesOf } from '@storybook/react-native';

// Component
import { HelpCard } from './HelpCard';

storiesOf('Cards', module)
  .addDecorator(Story => Story())
  .add('with text', () => (
    <HelpCard title="Help me!" subText="This is the sub text" />
  ))
  .add('With multi line', () => (
    <HelpCard
      title="This is a long long long long text that should go the full width of the screen on an iPhone"
      subText="This is a long long long sub text as well which should go the full width of a screen on an iPhone"
    />
  ));

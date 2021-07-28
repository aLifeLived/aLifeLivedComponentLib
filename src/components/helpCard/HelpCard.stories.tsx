import React from 'react';
import { storiesOf } from '@storybook/react-native';

// Component
import { HelpCard } from './HelpCard';

storiesOf('Help Card', module).add('with text', () => (
  <HelpCard title="Help me!" subText="This is the sub text" />
));

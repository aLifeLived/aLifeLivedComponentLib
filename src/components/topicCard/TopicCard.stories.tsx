import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

// Component
import { TopicCard } from './TopicCard';
import { Box } from '../../themes/box/Box';

storiesOf('Topic card', module)
  .addDecorator(Story => Story())
  .add('Default topic card', () => (
    <Box>
      <TopicCard
        onPress={action('On press fired')}
        title="Test title"
        description="This is a test description"
        duration={90}
        hasUserCompleted={false}
      />
      <TopicCard
        onPress={action('On press fired')}
        title="This is a really really long title, here it will break the topic card, if it gets any longer it may break the topic card!!"
        description="This is a really really really long test description to break the topic card"
        duration={25}
        hasUserCompleted={true}
      />
    </Box>
  ));

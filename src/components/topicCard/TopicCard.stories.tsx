import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

// Component
import { TopicCard } from './TopicCard';
import { Box } from '../../themes/box/Box';

storiesOf('Cards', module)
  .addDecorator(Story => Story())
  .add('Default topic card', () => (
    <Box>
      <Box margin="m">
        <TopicCard
          onPress={action('On press fired')}
          title="Ancestry"
          duration={90}
          hasUserCompleted={false}
        />
      </Box>
      <Box margin="m">
        <TopicCard
          onPress={action('On press fired')}
          title="This is a really really long title, here it will break the topic card, if it gets any longer it may break the topic card!!"
          duration={25}
          hasUserCompleted={true}
        />
      </Box>
      <Box margin="m">
        <TopicCard
          onPress={action('On press fired')}
          title="School Years"
          duration={25}
          hasUserCompleted={false}
        />
      </Box>
      <Box margin="m">
        <TopicCard
          onPress={action('On press fired')}
          title="Lessons Learned"
          duration={25}
          hasUserCompleted={true}
        />
      </Box>
    </Box>
  ));

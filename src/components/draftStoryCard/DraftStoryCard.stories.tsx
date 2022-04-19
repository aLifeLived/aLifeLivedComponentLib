import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import { DraftStoryCard } from './DraftStoryCard';
import { Box } from '../../themes/box/Box';

storiesOf('Draft story card', module)
  .addDecorator(Story => Story())
  .add('Default draft story card', () => (
    <Box margin="m">
      <Box margin="m">
        <DraftStoryCard
          title={text('Title', 'This is a test title')}
          topicTitle={text('Topic Title', 'Life story')}
          onPress={action('On press fired')}
          shouldDisplayEllipsis={true}
          onEllipsisPress={action('On ellipsis press')}
          recordingProgress={number('Story progress', 10)}
        />
      </Box>
      <Box margin="m">
        <DraftStoryCard
          title={text('Title', 'This is a test title')}
          topicTitle={text('Topic Title', 'Life story')}
          onPress={action('On press fired')}
          shouldDisplayEllipsis={false}
          recordingProgress={number('Story progress', 10)}
        />
      </Box>
    </Box>
  ));

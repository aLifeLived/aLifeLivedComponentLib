import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

// Component
import { StoryCard } from './StoryCard';
import { Box } from '../../themes/box/Box';

const storyData = [
  {
    id: 'test-story-one',
    title: 'Test title',
    duration: '25:00',
    likes: 0,
    avatar: 'https://picsum.photos/id/237/200/300',
    topic: 'Ancestry',
  },
  {
    id: 'test-story-two',
    title: 'This is a longer test title hey there',
    duration: '01:00',
    likes: 1500,
    avatar: 'https://picsum.photos/id/237/200/300',
    topic: 'Children',
  },
  {
    id: 'test-story-three',
    title:
      'This is a long title story, lets make this one go for ages! Hello there. I have the high ground. Hello there again',
    duration: '60:00',
    likes: 15,
    avatar: '',
    topic:
      'Test a really really really long topic title that is so long it breaks',
  },
];

storiesOf('Story card', module)
  .addDecorator(Story => Story())
  .add('Default story card', () => (
    <Box flex={1} backgroundColor="surface" padding="s">
      {storyData.map(story => (
        <StoryCard
          key={story.id}
          story={story}
          hasUserBookmarkedStory={false}
          hasUserLikedStory={false}
          onPress={action('Story card pressed')}
          onBookmarkPress={action('Bookmark pressed')}
          onLikePress={action('Heart pressed')}
        />
      ))}
    </Box>
  ))
  .add('Liked and bookmarked story card', () => (
    <Box flex={1} backgroundColor="surface" padding="s">
      {storyData.map(story => (
        <StoryCard
          key={story.id}
          story={story}
          hasUserBookmarkedStory={true}
          hasUserLikedStory={true}
          onPress={action('Story card pressed')}
          onBookmarkPress={action('Bookmark pressed')}
          onLikePress={action('Heart pressed')}
        />
      ))}
    </Box>
  ));

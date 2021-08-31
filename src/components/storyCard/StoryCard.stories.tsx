import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

// Component
import { StoryCard } from './StoryCard';

const storyData = [
  {
    id: 'test-story-one',
    title: 'Test title',
    duration: '20:00',
    likes: 10,
  },
  {
    id: 'test-story-two',
    title: 'Test title',
    duration: '20:00',
    likes: 10,
  },
  {
    id: 'test-story-three',
    title:
      'This is a long title story, so we can see how it looks with a really long title! The more I type the I hope it mess up the story card design',
    duration: '20:00',
    likes: 10,
  },
];

storiesOf('Story card', module)
  .addDecorator(Story => Story())
  .add('Default story card', () => (
    <>
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
    </>
  ))
  .add('Liked and bookmarked story card', () => (
    <>
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
    </>
  ));

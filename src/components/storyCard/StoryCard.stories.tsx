import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

// Component
import { StoryCard } from './StoryCard';

const storyData = [
  {
    id: 'test-story-one',
    title: 'Test title',
    duration: '25:00',
    likes: 0,
    interviewer: {
      username: 'test user name',
    },
  },
  {
    id: 'test-story-two',
    title: 'This is a longer test title hey there',
    duration: '01:00',
    likes: 1500,
    interviewer: {
      username: 'test user name',
    },
  },
  {
    id: 'test-story-three',
    title:
      'This is a long title story, lets make this one go for ages! Hello there. I have the high ground. Hello there again',
    duration: '60:00',
    likes: 15,
    interviewer: {
      username: 'test user a long user name see how it goes',
    },
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

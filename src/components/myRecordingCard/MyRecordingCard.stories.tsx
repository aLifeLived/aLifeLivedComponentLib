import React, { useCallback, useState } from 'react';
import { storiesOf } from '@storybook/react-native';

// Component
import { MyRecordingCard } from './MyRecordingCard';

// UI
import { Box } from '../../themes/box/Box';

const MyRecordingCardComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleOnPress = useCallback(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsAudioPlaying(true);
    }, 2000);

    return timer;
  }, []);

  return (
    <Box margin="s">
      <MyRecordingCard
        title="Question 23"
        onMediaPress={() =>
          isAudioPlaying ? setIsAudioPlaying(false) : handleOnPress()
        }
        onDeletePress={() => console.log('Pressed')}
        isAudioPlaying={isAudioPlaying}
        isLoading={isLoading}
      />
    </Box>
  );
};

storiesOf('Cards', module)
  .addDecorator(Story => Story())
  .add('My recording', () => (
    <>
      <MyRecordingCardComponent />
      <MyRecordingCardComponent />
    </>
  ));

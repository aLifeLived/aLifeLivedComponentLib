import React from 'react';
import { Dimensions } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

// Component
import { OnboardingContent } from './OnboardingContent';
import { SystemFlatList } from '../../themes/systemFlatList/SystemFlatList';

// UI
import { Box } from '../../themes/box/Box';
import { Text } from '../../themes/text/Text';

const pages = [
  {
    title: 'Listen',
    description: 'This is the first description',
    onNextPress: () => action('Tap next pressed'),
    children: <Text variant="h1">This is the first</Text>,
    onNextButtonText: 'Tap next',
  },
  {
    title: 'Record',
    description: 'This is the second description',
    onNextPress: () => action('Tap next pressed'),
    children: <Text variant="h1">This is the second</Text>,
    onNextButtonText: 'Finish',
  },
];

storiesOf('Onboarding', module)
  .addDecorator(Story => Story())
  .add('Default', () => {
    const window = Dimensions.get('screen');
    return (
      <Box width={window.width} height={window.height}>
        <OnboardingContent
          title={text('Title', 'Listen')}
          description={text('Description', 'This is the description')}
          onNextPress={action('Tap next pressed')}
          onNextButtonText="Tap next"
        >
          <Text variant="h1">I'm the child</Text>
        </OnboardingContent>
      </Box>
    );
  })
  .add('Slider', () => {
    const window = Dimensions.get('screen');
    return (
      <SystemFlatList
        width={window.width}
        height={window.height}
        data={pages}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
        horizontal
        keyExtractor={item => item.title}
        initialNumToRender={1}
        renderItem={({ item }) => (
          <Box width={window.width} height={window.height}>
            <OnboardingContent
              title={item.title}
              description={item.description}
              onNextPress={item.onNextPress}
              onNextButtonText={item.onNextButtonText}
            >
              {item.children}
            </OnboardingContent>
          </Box>
        )}
      />
    );
  });

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import { ThemeCard } from './ThemeCard';

// UI
import { Box } from '../../themes/box/Box';
import { FlatList } from 'react-native';

const data = [
  {
    id: '1',
    title: 'TEST',
    imageUrl: 'https://picsum.photos/id/237/200/300',
    subText: 'test subtext',
  },
  {
    id: '2',
    title: 'TEST',
    imageUrl: 'https://picsum.photos/id/237/200/300',
    subText: 'test subtext',
  },
  {
    id: '3',
    title: 'TEST',
    imageUrl: 'https://picsum.photos/id/237/200/300',
    subText: 'test subtext',
  },
  {
    id: '4',
    title: 'TEST',
    imageUrl: 'https://picsum.photos/id/237/200/300',
    subText: 'test subtext',
  },
];

storiesOf('Cards', module)
  .addDecorator(Story => Story())
  .add('Default theme card in list', () => (
    <Box flex={1} backgroundColor="white">
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={() => (
          <Box margin="m" width="40%">
            <ThemeCard
              title={text('Title', 'A Life Lived')}
              imageUrl="https://picsum.photos/id/237/200/300"
              onPress={action('On press fired')}
            />
          </Box>
        )}
      />
    </Box>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

// Component
import { UserCard } from './UserCard';
import { UserCardSkeleton } from './UserCardSkeleton';
import { Box } from '../../themes/box/Box';
import { SystemFlatList } from '../../themes/systemFlatList/SystemFlatList';

const data = [
  {
    id: '1',
    username: 'johnSmithWithAReallyReallyLongNameSoLOng',
    avatarImageMediaAsset: {
      url: 'https://picsum.photos/id/237/200/300',
    },
  },
  {
    id: '2',
    username: 'johnSmith',
    avatarImageMediaAsset: undefined,
  },
  {
    id: '3',
    username: 'johnSmith',
    avatarImageMediaAsset: {
      url: 'https://picsum.photos/id/237/200/300',
    },
  },
  {
    id: '4',
    username: 'johnSmith',
    avatarImageMediaAsset: {
      url: '',
    },
  },
];

storiesOf('User card', module)
  .addDecorator(Story => Story())
  .add('Default user card', () => (
    <Box
      backgroundColor="surface"
      flex={1}
      alignContent="center"
      alignItems="flex-start"
    >
      <SystemFlatList
        data={data}
        width="100%"
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Box marginTop="m" width="100%" paddingLeft="s">
            <UserCard
              onPress={action('On press fired')}
              username={item.username}
              avatarUrl={item.avatarImageMediaAsset?.url}
            />
          </Box>
        )}
      />
    </Box>
  ))
  .add('User card loading', () => (
    <Box margin="m">
      <UserCardSkeleton />
    </Box>
  ));

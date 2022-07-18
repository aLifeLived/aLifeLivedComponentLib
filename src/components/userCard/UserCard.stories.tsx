import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';

// Component
import { UserCard } from './UserCard';
import { UserCardSkeleton } from './UserCardSkeleton';
import { Box } from '../../themes/box/Box';
import { SystemFlatList } from '../../themes/systemFlatList/SystemFlatList';

const data = [
  {
    id: '5f92cdce0cf217478ba931',
    username: 'johnSmithWithAReallyReallyLongNameSoLOng',
    avatarImageMediaAsset: {
      url: 'https://picsum.photos/id/237/200/300',
    },
  },
  {
    id: '5f92cdce0cf217478',
    username: 'johnSmith',
    avatarImageMediaAsset: null,
  },
  {
    id: '5f92cdce0cf217478ba93663',
    username: 'johnSmith',
    avatarImageMediaAsset: {
      url: 'https://picsum.photos/id/237/200/300',
    },
  },
  {
    id: '5f92cdce0cf217478ba93561',
    username: 'johnSmith',
    avatarImageMediaAsset: null,
  },
];

const MyUserCardComponent = ({ item }: any) => {
  const [isUserSelected, setIsUserSelected] = useState(false);

  return (
    <Box marginTop="m" width="100%" paddingLeft="s">
      <UserCard
        isUserSelected={isUserSelected}
        onPress={() => setIsUserSelected(!isUserSelected)}
        username={item.username}
        avatarUrl={item.avatarImageMediaAsset?.url}
      />
    </Box>
  );
};
storiesOf('Cards', module)
  .addDecorator(Story => Story())
  .add('Default user card', () => (
    <Box flex={1} alignContent="center" alignItems="flex-start">
      <SystemFlatList
        data={data}
        width="100%"
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MyUserCardComponent item={item} />}
      />
    </Box>
  ))
  .add('User card loading', () => (
    <Box margin="m">
      <UserCardSkeleton />
    </Box>
  ));

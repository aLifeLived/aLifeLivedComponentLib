import React from 'react';
import { storiesOf } from '@storybook/react-native';

// Component
import { UserCardSkeleton } from './UserCardSkeleton';
import { Box } from '../box/Box';

storiesOf('Loading Skeletons', module)
  .addDecorator(Story => Story())
  .add('User card', () => (
    <Box margin="m">
      <UserCardSkeleton />
    </Box>
  ));

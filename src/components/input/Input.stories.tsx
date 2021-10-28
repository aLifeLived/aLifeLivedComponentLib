import React from 'react';
import { storiesOf } from '@storybook/react-native';

// Component
import { Input } from './Input';
import { Box } from '../../themes/box/Box';

storiesOf('Input', module)
  .addDecorator(Story => Story())
  .add('Default', () => (
    <Box backgroundColor="surface" flex={1} width="100%">
      <Box margin="s">
        <Input
          label="Hey this is a long label"
          variant="default"
          returnKeyType="default"
          placeholder="Enter your first name"
        />
      </Box>
    </Box>
  ))
  .add('No Label', () => (
    <Box margin="s">
      <Input
        variant="default"
        returnKeyType="default"
        placeholder="Enter your email address"
      />
    </Box>
  ))
  .add('Underline', () => (
    <Box margin="s">
      <Input
        variant="underline"
        returnKeyType="default"
        placeholder="Enter your email address"
        label="Under line variant"
      />
    </Box>
  ));

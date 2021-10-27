import React from 'react';
import { storiesOf } from '@storybook/react-native';

// Component
import { Input } from './Input';
import { Box } from '../../themes/box/Box';

storiesOf('Input', module)
  .addDecorator(Story => Story())
  .add('Default', () => (
    <Box margin="s">
      <Input
        label="Hey this is a long label"
        variant="default"
        returnKeyType="default"
        placeholder="Hey there"
      />
    </Box>
  ))
  .add('No Label', () => (
    <Box margin="s">
      <Input
        variant="default"
        returnKeyType="default"
        placeholder="Hey there"
      />
    </Box>
  ));

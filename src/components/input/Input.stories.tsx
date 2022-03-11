import React from 'react';
import { storiesOf } from '@storybook/react-native';

// Component
import { Input } from './Input';
import { Box } from '../../themes/box/Box';

storiesOf('Input', module)
  .addDecorator(Story => Story())
  .add('Default', () => (
    <Box backgroundColor="backgroundContrastLow" flex={1} width="100%">
      <Box margin="s">
        <Input
          label="Default variant"
          variant="default"
          labelVariant="h3"
          returnKeyType="default"
        />
      </Box>
      <Box margin="s">
        <Input
          label="Success variant"
          variant="success"
          labelVariant="h3"
          returnKeyType="default"
        />
      </Box>
      <Box margin="s">
        <Input
          label="Error variant"
          variant="error"
          labelVariant="h3"
          returnKeyType="default"
        />
      </Box>
    </Box>
  ))
  .add('Underline', () => (
    <Box margin="s">
      <Input
        variant="underline"
        returnKeyType="default"
        label="Under line variant"
      />
    </Box>
  ));

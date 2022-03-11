import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';

// Component
import { Input } from './Input';
import { Box } from '../../themes/box/Box';

const InputExample = () => {
  const [input, setInput] = useState('');

  const handleError = () => {
    if (input === 'Success') {
      return 'success';
    } else if (input === 'Error') {
      return 'error';
    } else {
      return 'default';
    }
  };

  return (
    <Input
      label={`${handleError().toLocaleUpperCase()} variant`}
      variant={handleError()}
      value={input}
      onChangeText={(text: string) => setInput(text)}
      labelVariant="h3"
      returnKeyType="default"
    />
  );
};

storiesOf('Input', module)
  .addDecorator(Story => Story())
  .add('Default', () => (
    <Box backgroundColor="backgroundContrastLow" flex={1} width="100%">
      <Box margin="s">
        <InputExample />
      </Box>
      <Box margin="s">
        <Input
          label="SUCCESS variant"
          variant="success"
          labelVariant="h3"
          returnKeyType="default"
        />
      </Box>
      <Box margin="s">
        <Input
          label="ERROR variant"
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

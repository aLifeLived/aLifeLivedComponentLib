import React from 'react';
import { action } from '@storybook/addon-actions';

// Components
import { storiesOf } from '@storybook/react-native';
import { Box } from '../../themes/box/Box';
import { Selector } from './Selector';

storiesOf('Selector', module)
  .addDecorator(Story => Story())
  .add('No value selected', () => (
    <Box marginLeft="s" marginRight="s">
      <Selector
        onPress={action('On press action')}
        title="Story tellers"
        selectedValue={[]}
        selectedValuePlaceholderValue="Please select an option"
      />
    </Box>
  ))
  .add('Value selected', () => (
    <Box marginLeft="s" marginRight="s">
      <Selector
        onPress={action('On press action')}
        title="Story tellers"
        selectedValue={['John', 'Smith', 'Charlie']}
        selectedValuePlaceholderValue="Please select an option"
      />
    </Box>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react-native';

// Component
import { FaqCard } from './FaqCard';
import { Box } from '../../themes/box/Box';

const testText =
  'The information contained herein is preliminary, is provided for discussion purposes only, is only a summary of key information, is not complete, and does not contain certain material information about the Company.';

storiesOf('Cards', module)
  .addDecorator(Story => Story())
  .add('FAQ Card', () => (
    <Box margin="m">
      <Box margin="s">
        <FaqCard header="How do I delete a recording?" content={testText} />
      </Box>
      <Box margin="s">
        <FaqCard header="How do I record?" content={testText} />
      </Box>
      <Box margin="s">
        <FaqCard
          header="How should I be holding my device?"
          content={testText}
        />
      </Box>
    </Box>
  ));

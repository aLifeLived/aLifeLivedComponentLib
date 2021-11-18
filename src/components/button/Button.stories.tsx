import React from 'react';

import { storiesOf } from '@storybook/react-native';

// Component
import { Button } from './Button';
import { action } from '@storybook/addon-actions';
import { CenterView } from '../centerView/CenterView';
import { Box } from '../../themes/box/Box';

storiesOf('Button', module)
  .addDecorator(Story => <CenterView>{Story()}</CenterView>)
  .add('Default button', () => (
    <Box width="100%" alignItems="center">
      <Button
        title="Test button that has a long title"
        onPress={action('Button on press fired')}
        isLoading={false}
        isDisabled={false}
        margin="m"
        backgroundColor="primaryRed"
      />

      <Button
        title="Loading button"
        onPress={action('Button on press')}
        isLoading={true}
        isDisabled={false}
        margin="m"
        width="90%"
      />

      <Button
        title="Disabled button"
        onPress={action('Button on press')}
        isLoading={false}
        isDisabled={true}
        margin="m"
        width="90%"
      />
    </Box>
  ));

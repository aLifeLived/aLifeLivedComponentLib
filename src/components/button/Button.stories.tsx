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
      <Box width="90%" margin="m">
        <Button
          title="Test button that has a long long title"
          onPress={action('Button on press fired')}
          isLoading={false}
          isDisabled={false}
          color="backgroundContrastXLow"
          backgroundColor="secondary"
        />
      </Box>
      <Box width="90%" margin="m">
        <Button
          title="Loading button"
          onPress={action('Button on press')}
          isLoading={true}
          isDisabled={false}
        />
      </Box>
      <Box width="90%" margin="m">
        <Button
          title="Disabled button"
          onPress={action('Button on press')}
          isLoading={false}
          isDisabled={true}
        />
      </Box>
    </Box>
  ));

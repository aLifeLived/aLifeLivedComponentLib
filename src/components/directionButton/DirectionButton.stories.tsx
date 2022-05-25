import React from 'react';

import { storiesOf } from '@storybook/react-native';

// Component
import { DirectionButton } from './DirectionButton';
import { action } from '@storybook/addon-actions';
import { CenterView } from '../centerView/CenterView';
import { Box } from '../../themes/box/Box';

storiesOf('Button', module)
  .addDecorator(Story => <CenterView>{Story()}</CenterView>)
  .add('Direction button', () => (
    <Box width="100%" alignItems="center">
      <Box width="90%" margin="m">
        <Box margin="m">
          <DirectionButton
            title="Account"
            onPress={action('Button on press fired')}
            isDisabled={false}
            leftIconName="lightbulb"
          />
        </Box>
        <Box margin="m">
          <DirectionButton
            title="Billing"
            onPress={action('Button on press fired')}
            isDisabled={false}
            leftIconName="bookmark"
          />
        </Box>
        <Box margin="m">
          <DirectionButton
            title="Stories"
            onPress={action('Button on press fired')}
            isDisabled={false}
            leftIconName="play"
          />
        </Box>
      </Box>
    </Box>
  ));

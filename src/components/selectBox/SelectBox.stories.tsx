import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

// Assets
import MyselfRecording from '../../assets/svg/myself-recording.svg';
import SomeoneElseRecording from '../../assets/svg/someone-else-recording.svg';

// Component
import { SelectBox } from './SelectBox';
import { Box } from '../../themes/box/Box';
import { Icon } from '../icon/Icon';

storiesOf('Select box', module)
  .addDecorator(Story => Story())
  .add('Horizontal', () => (
    <Box>
      <Box margin="m">
        <SelectBox
          title={text('Title', 'Public')}
          subText={text(
            'Sub text',
            'By making your story public other users can listen and share it.'
          )}
          isSelected={boolean('isSelected', false)}
          onPress={action('Public pressed')}
          backgroundColor="secondaryOverlay"
        >
          <SomeoneElseRecording />
        </SelectBox>
      </Box>
      <Box margin="m">
        <SelectBox
          title={text('Title', 'Public')}
          subText={text(
            'Sub text',
            'By making your story public other users can listen and share it.'
          )}
          isSelected={boolean('isSelected', false)}
          onPress={action('Public pressed')}
          backgroundColor="primaryOverlay"
        >
          <MyselfRecording />
        </SelectBox>
      </Box>
      <Box margin="m">
        <SelectBox
          title={text('Title', 'Public')}
          subText={text(
            'Sub text',
            'By making your story public other users can listen and share it.'
          )}
          isSelected={boolean('isSelected', false)}
          onPress={action('Public pressed')}
          borderColor="primary"
        >
          <Icon icon="eye" color="backgroundContrastHigh" size={32} />
        </SelectBox>
      </Box>
    </Box>
  ));

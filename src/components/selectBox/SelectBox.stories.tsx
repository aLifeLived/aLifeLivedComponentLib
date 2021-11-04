import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

// Component
import { SelectBox } from './SelectBox';
import { Box } from '../../themes/box/Box';
import { Icon } from '../icon/Icon';

storiesOf('Select box', module)
  .addDecorator(Story => Story())
  .add('Horizontal', () => (
    <Box margin="s">
      <SelectBox
        variant="horizontal"
        title={text('Title', 'Public')}
        subText={text(
          'Sub text',
          'By making your story public other users can listen and share it.'
        )}
        isSelected={boolean('isSelected', false)}
        onPress={action('Public pressed')}
      >
        <Icon icon="eye" color="contrastHigh" size={32} />
      </SelectBox>
    </Box>
  ))
  .add('Vertical', () => (
    <Box margin="s">
      <SelectBox
        variant="vertical"
        title={text('Title', 'Public')}
        subText={text(
          'Sub text',
          'By making your story public other users can listen and share it.'
        )}
        isSelected={boolean('isSelected', false)}
        onPress={action('Public pressed')}
      >
        <Icon icon="eye" color="contrastHigh" size={32} />
      </SelectBox>
    </Box>
  ));

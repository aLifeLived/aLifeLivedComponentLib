import React from 'react';

import { storiesOf } from '@storybook/react-native';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from 'react-native-fontawesome';
// Component
import { Button } from './Button';
import { action } from '@storybook/addon-actions';
import { CenterView } from '../centerView/CenterView';

storiesOf('Button', module)
  .addDecorator(Story => <CenterView>{Story()}</CenterView>)
  .add('Default button', () => (
    <>
      <FontAwesome icon={BrandIcons.youtube} />
      <Button
        title="Test button"
        onPress={action('Button on press fired')}
        width="50%"
      />
    </>
  ));

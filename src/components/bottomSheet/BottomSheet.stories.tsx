import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

// Component
import { BottomSheet } from './BottomSheet';
import { Button } from '../button/Button';
import { CenterView } from '../centerView/CenterView';

storiesOf('Bottom sheet', module)
  .addDecorator(Story => Story())
  .add('Default', () => <BottomSheet isVisible={true} />);

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from './Button';
import CenterView from '../centerView/CenterView';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView children={getStory()} />)
  .add('with text', () => (
    <Button
      onPress={action('MAX')}
      children={<Text>{text('Button text', 'Hello Button')}</Text>}
    />
  ))
  .add('with some emoji', () => (
    <Button
      onPress={action('clicked-emoji')}
      children={<Text>😀 😎 👍 💯</Text>}
    />
  ));

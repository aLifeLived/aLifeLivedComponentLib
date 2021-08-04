import React from 'react';
import { storiesOf } from '@storybook/react-native';

// Component
import { RecordingTimer } from './RecordingTimer';
import { CenterView } from '../centerView/CenterView';

storiesOf('Recording timer', module)
  .addDecorator(Story => <CenterView children={Story()} />)
  .add('Loading state', () => (
    <RecordingTimer
      timerSeconds="0:00"
      isRecording={false}
      status="Loading please wait..."
    />
  ))
  .add('Ready state', () => (
    <RecordingTimer timerSeconds="0:00" isRecording={false} status="Ready" />
  ))
  .add('Buffering state', () => (
    <RecordingTimer
      timerSeconds="0:00"
      isRecording={false}
      status="Buffering..."
    />
  ))
  .add('Recording state', () => (
    <RecordingTimer timerSeconds="5:30" isRecording={true} status="Recording" />
  ))
  .add('Playing state', () => (
    <RecordingTimer
      timerSeconds="0:00"
      isRecording={false}
      status="Audio playing"
    />
  ))
  .add('Stopped state', () => (
    <RecordingTimer
      timerSeconds="0:00"
      isRecording={false}
      status="Audio stopped"
    />
  ));

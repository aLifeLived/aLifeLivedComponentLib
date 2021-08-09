import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

// Component
import { NoCtaModal } from './NoCtaModal';

storiesOf('Modal', module)
  .addDecorator(Story => Story())
  .add('profile', () => (
    <NoCtaModal
      isVisible={true}
      onClose={action('On close action fired')}
      header="Welcome to the profile page! 🙋‍♀️🙋"
      description="You can see all the stories you have created here. As well as the stories you have liked or bookmarked!"
    />
  ))
  .add('search', () => (
    <NoCtaModal
      isVisible={true}
      onClose={action('On close action fired')}
      header="Welcome to the search page! 🔎"
      description="Here you can search for stories by title or tags"
    />
  ))
  .add('recording-success', () => (
    <NoCtaModal
      isVisible={true}
      onClose={action('On close action fired')}
      header="Success! 👏"
      description="You've completed your first recording! Now to keep going closing this modal and pressing the 'Proceed to next question' button"
    />
  ));

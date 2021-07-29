import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';

// Button
import Button from '../../../src/components/button/Button';

describe('Button test', () => {
  test('Can press button', () => {
    const { toJSON } = render(
      <Button
        onPress={() => console.log('TEST')}
        children={<Text>HI THERE</Text>}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

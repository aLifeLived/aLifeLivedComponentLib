import React from 'react';
import { Text } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';

// Button
import Button from '../../../src/components/button/Button';

describe('Button test', () => {
  test('Can press button', () => {
    const { getByTestId, toJSON } = render(
      <Button
        onPress={() => console.log("TEST")}
        children={<Text>HI THERE</Text>}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
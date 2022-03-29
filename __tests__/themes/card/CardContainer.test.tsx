import React from 'react';
import { render, fireEvent } from '../../../jest/renderUtil';
import { CardContainer } from '../../../src/themes/card/CardContainer';
import { ColorThemeTokens } from '../../../src/themes/palette';
import { Text } from '../../../src/themes/text/Text';

const mockOnPress = jest.fn();
const setup = ({ backgroundColor }: { backgroundColor?: ColorThemeTokens }) =>
  render(
    <CardContainer onPress={mockOnPress} backgroundColor={backgroundColor}>
      <Text>Child</Text>
    </CardContainer>
  );

describe('src >> themes >> card', () => {
  describe('Given background has been passed in as prop', () => {
    test('Should match snapshot', () => {
      const { toJSON } = setup({ backgroundColor: 'blue' });
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Given no background has been passed in as prop', () => {
    test('Should match snapshot', () => {
      const { toJSON } = setup({});
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Given child component has been passed in', () => {
    test('Should render child component', () => {
      const { getByText } = setup({});
      expect(getByText('Child')).toBeDefined();
    });
  });

  describe('Given a user presses a card', () => {
    test('Should fire onPress', () => {
      const { getByText } = setup({});
      fireEvent.press(getByText('Child'));
      expect(mockOnPress).toBeCalledTimes(1);
    });
  });
});

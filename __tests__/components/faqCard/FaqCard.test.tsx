import React from 'react';
import { fireEvent, render } from '../../../jest/renderUtil';

// Component
import { FaqCard } from '../../../src/components/faqCard/FaqCard';

const setup = () =>
  render(<FaqCard header="Test header" content="Test content" />);

describe('src >> components >> faqCard', () => {
  describe('Given container is NOT open', () => {
    test('Should match snapshot ', () => {
      const { toJSON } = setup();
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find header text', () => {
      const { getByText } = setup();
      expect(getByText('Test header')).toBeDefined();
    });

    test('Should NOT find content text', () => {
      const { queryByText } = setup();
      expect(queryByText('Test content')).toBeNull();
    });
  });

  describe('Given container IS open', () => {
    test('Should match snapshot', () => {
      const { toJSON, getByText } = setup();
      fireEvent.press(getByText('Test header'));
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find header text', () => {
      const { getByText } = setup();
      expect(getByText('Test header')).toBeDefined();
    });

    test('Should find content text', () => {
      const { getByText } = setup();
      fireEvent.press(getByText('Test header'));
      expect(getByText('Test content')).toBeDefined();
    });
  });
});

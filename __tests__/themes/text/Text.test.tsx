import React from 'react';
import { Text } from '../../../src/themes/text/Text';
import { render } from '../../../jest/renderUtil';

describe('src >> themes >> Text', () => {
  describe('h1 Text render', () => {
    test('Render h1 test correctly', () => {
      const { toJSON } = render(<Text variant="h1">H1 variant</Text>);
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('h2 Text render', () => {
    test('Render h2 test correctly', () => {
      const { toJSON } = render(<Text variant="h2">H2 variant</Text>);
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('h3 Text render', () => {
    test('Render h3 test correctly', () => {
      const { toJSON } = render(<Text variant="h3">H3 variant</Text>);
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('h4 Text render', () => {
    test('Render h4 test correctly', () => {
      const { toJSON } = render(<Text variant="h4">H3 variant</Text>);
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Intro Text render', () => {
    test('Render intro test correctly', () => {
      const { toJSON } = render(<Text variant="intro">Body variant</Text>);
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Body Text render', () => {
    test('Render body test correctly', () => {
      const { toJSON } = render(<Text variant="body">Body variant</Text>);
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('BodySmall Text render', () => {
    test('Render BodySmall test correctly', () => {
      const { toJSON } = render(
        <Text variant="bodySmall">Caption variant</Text>
      );
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('BodyXSmall Text render', () => {
    test('Render BodyXSmall test correctly', () => {
      const { toJSON } = render(
        <Text variant="bodyXSmall">Caption variant</Text>
      );
      expect(toJSON()).toMatchSnapshot();
    });
  });
});

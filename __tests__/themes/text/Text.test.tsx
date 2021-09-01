import React from 'react';
import { Text } from '../../../src/themes/text/Text';
import { render } from '../../../jest/renderUtil';

describe('', () => {
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

  describe('Default Text render', () => {
    test('Render default test correctly', () => {
      const { toJSON } = render(<Text variant="default">Default variant</Text>);
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Body Text render', () => {
    test('Render body test correctly', () => {
      const { toJSON } = render(<Text variant="body">Body variant</Text>);
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Caption Text render', () => {
    test('Render caption test correctly', () => {
      const { toJSON } = render(<Text variant="caption">Caption variant</Text>);
      expect(toJSON()).toMatchSnapshot();
    });
  });
});

import React from 'react';
import { SystemBottomSheet } from '../../../src/themes/systemBottomSheet/SystemBottomSheet';
import { render } from '../../../jest/renderUtil';
import { Text } from '../../../src/themes/text/Text';

describe('themes >> systemBottomSheet', () => {
  describe('Should render systemBottomSheet box with no children', () => {
    test('Render snapshot correctly', () => {
      const { toJSON } = render(
        <SystemBottomSheet isVisible={true}>{}</SystemBottomSheet>
      );
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find close button', () => {
      const { getByText } = render(
        <SystemBottomSheet isVisible={true}>{}</SystemBottomSheet>
      );
      expect(getByText('Close')).not.toBeNull();
    });
  });

  describe('Should NOT render systemBottomSheet', () => {
    test('Should not render bottom sheet', () => {
      const { toJSON } = render(
        <SystemBottomSheet isVisible={false}>{}</SystemBottomSheet>
      );
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Should render systemBottomSheet with children', () => {
    test('Should render bottom sheet with text', () => {
      const { toJSON } = render(
        <SystemBottomSheet isVisible={true}>
          <Text>Hi there</Text>
        </SystemBottomSheet>
      );
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find text', () => {
      const { getByText } = render(
        <SystemBottomSheet isVisible={true}>
          <Text>Hi there</Text>
        </SystemBottomSheet>
      );
      expect(getByText('Hi there')).not.toBeNull();
    });

    test('Should find close button', () => {
      const { getByText } = render(
        <SystemBottomSheet isVisible={true}>{}</SystemBottomSheet>
      );
      expect(getByText('Close')).not.toBeNull();
    });
  });
});

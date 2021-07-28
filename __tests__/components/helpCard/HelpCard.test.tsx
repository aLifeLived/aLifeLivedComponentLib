import React from 'react';
import { render } from '@testing-library/react-native';

// Component
import { HelpCard } from '../../../src/components/helpCard/HelpCard';

const props = {
  title: 'Test title',
  subText: 'Test sub text',
};

const setup = () => {
  // Screen
  const utils = render(
    <HelpCard title={props.title} subText={props.subText} />
  );

  return {
    ...utils,
  };
};

describe('Help card component test ', () => {
  test('Should render help card correctly', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });

  test('Should render title and sub text', () => {
    const { getByText } = setup();
    expect(getByText(props.title)).not.toBeNull();
    expect(getByText(props.subText)).not.toBeNull();
  });
});

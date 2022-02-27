import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';
import Button from '.';

test('it renders the default button correctly', () => {
  const tree = TestRenderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('it renders the disabled button correctly', () => {
  const tree = TestRenderer.create(<Button disabled />).toJSON();
  expect(tree).toMatchSnapshot();
});

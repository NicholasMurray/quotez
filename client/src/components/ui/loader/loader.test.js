import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';
import Loader from '.';

test('it renders the loader correctly', () => {
  const tree = TestRenderer.create(<Loader />).toJSON();
  expect(tree).toMatchSnapshot();
});

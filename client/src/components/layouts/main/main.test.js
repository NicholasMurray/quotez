import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';
import Main from '.';

test('it renders the main ui element correctly', () => {
  const tree = TestRenderer.create(<Main />).toJSON();
  expect(tree).toMatchSnapshot();
});

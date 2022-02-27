import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';
import Quote from '.';

const quote = {
  en: 'Hello World',
  author: 'A.N. Other',
};

test('it renders the quote correctly', () => {
  const tree = TestRenderer.create(<Quote quote={quote} />).toJSON();
  expect(tree).toMatchSnapshot();
});

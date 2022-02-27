import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';
import quotesData from './app.test-data';

const testQuote = quotesData[0];

const server = setupServer(
  rest.get('http://localhost:8888/api/random-quote', (req, res, ctx) => {
    return res(ctx.json(testQuote));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders Get Quotez button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Get Quotez/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders quote and author on load', async () => {
  render(<App />);
  await waitFor(() => {
    expect(
      screen.getByText(/Computer Science is no more about computers/i)
    ).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText(`${testQuote.author}`)).toBeInTheDocument();
  });
});

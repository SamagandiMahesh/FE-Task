// app.test.js
import {render, screen} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import App from './App'
import {MemoryRouter} from 'react-router-dom'

test('landing on results page', async () => {
  const route = '/results';
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  expect(screen.getByRole('link')).toHaveAttribute('href', '/home');
});

test('landing on home page', async () => {
  const route = '/results';
  render(
    <MemoryRouter initialEntries={["/nomatch", "/results", { pathname: "/home" }]}>
      <App />
    </MemoryRouter>,
  )

  await screen.findByTestId("flight-search-form");
  expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
});
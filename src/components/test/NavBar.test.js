import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../NavBar';

test('renders NavBar with Home icon', async () => {
  render(
    <Router>
      <NavBar />
    </Router>,
  );

  const homeIcon = await screen.findByTestId('home-icon');
  expect(homeIcon).toBeInTheDocument();
});

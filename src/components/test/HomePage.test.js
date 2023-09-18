import React from 'react';
import {
  render, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import HomePage from '../HomePage';

jest.mock('axios');

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
  });

  it('displays cryptos based on search', async () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );

    const input = getByPlaceholderText('Find Crypto....');

    fireEvent.change(input, { target: { value: 'Bitcoin' } });
  });
});

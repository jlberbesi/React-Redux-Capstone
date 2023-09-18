import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import store from '../../redux/store';
import { setCoins } from '../../redux/cryptoSlice';
import DetailsPage from '../DetailsPage';

test('renders DetailsPage with crypto details', () => {
  const mockCoins = [
    {
      id: '1',
      icon: 'image_url',
      name: 'Bitcoin',
      symbol: 'BTC',

      rank: '1',
      price: '45000',
      priceBtc: '1',
      volume: '500000',
      marketCap: '900000000000',
      availableSupply: '19000000',
      totalSupply: '21000000',
      priceChange1h: '0.1',
      priceChange1d: '-2',
      priceChange1w: '5',
      websiteUrl: 'https://bitcoin.org',
    },
  ];

  store.dispatch(setCoins(mockCoins));

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );

  expect(screen.getByText('Bitcoin (BTC)')).toBeInTheDocument();
});

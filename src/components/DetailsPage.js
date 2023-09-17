import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptos } from '../redux/cryptoSlice';
import './style/DetailsPage.css';

function DetailsPage() {
  const dispatch = useDispatch();
  const cryptos = useSelector((state) => state.crypto.coins);
  const { id } = useParams();
  const cryptoDetails = cryptos.find((crypto) => crypto.id === id);

  useEffect(() => {
    if (!cryptos.length) {
      dispatch(fetchCryptos());
    }
  }, [dispatch, cryptos]);

  return (
    <div className="details-container">
      {cryptoDetails && (
        <div className="details-card">
          <img src={cryptoDetails.icon} alt={cryptoDetails.name} width="100" />
          <h2>
            {cryptoDetails.name}
            {' '}
            (
            {cryptoDetails.symbol}
            )
          </h2>
          <table className="table">
            <tbody>
              <tr>
                <th>
                  Rank:
                </th>
                <td>
                  {cryptoDetails.rank}
                </td>
              </tr>
              <tr>
                <th>
                  Price:
                </th>
                <td>
                  {cryptoDetails.price}
                </td>
              </tr>
              <tr>
                <th>
                  Price (BTC):
                </th>
                <td>
                  {cryptoDetails.priceBtc}
                </td>
              </tr>
              <tr>
                <th>
                  Volume:
                </th>
                <td>
                  {cryptoDetails.volume}
                </td>
              </tr>
              <tr>
                <th>
                  Market Cap:
                </th>
                <td>
                  {cryptoDetails.marketCap}
                </td>
              </tr>
              <tr>
                <th>
                  Available Supply:
                </th>
                <td>
                  {cryptoDetails.availableSupply}
                </td>
              </tr>
              <tr>
                <th>
                  Total Supply:
                </th>
                <td>
                  {cryptoDetails.totalSupply}
                </td>
              </tr>
              <tr>
                <th>
                  Price Change (1h):
                </th>
                <td>
                  {cryptoDetails.priceChange1h}
                  %
                </td>
              </tr>
              <tr>
                <th>
                  Price Change (1d):
                </th>
                <td>
                  {cryptoDetails.priceChange1d}
                  %
                </td>
              </tr>
              <tr>
                <th>
                  Price Change (1w):
                </th>
                <td>
                  {cryptoDetails.priceChange1w}
                  %
                </td>
              </tr>
              <tr>
                <th>
                  Website:
                </th>
                <td>
                  <a href={cryptoDetails.websiteUrl} target="_blank" rel="noopener noreferrer">Visit</a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default DetailsPage;

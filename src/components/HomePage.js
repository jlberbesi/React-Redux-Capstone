import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchCryptos } from '../redux/cryptoSlice';
import './style/HomePage.css';

function HomePage() {
  const dispatch = useDispatch();
  const cryptos = useSelector((state) => state.crypto.coins);
  const [searchTerm, setSearchTerm] = React.useState('');

  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredCryptos = cryptos.filter((crypto) => crypto.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <div className="centerinput">
        <input
          className="input"
          type="text"
          placeholder="Find Crypto...."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="crypto-grid">
        {filteredCryptos.map((crypto, index) => (
          <div key={crypto.id} className={`crypto-card ${index % 2 === 0 ? 'color-1' : 'color-2'}`}>
            <div className="arrow-container">
              <Link to={`/details/${crypto.id}`}><BsArrowRightCircle /></Link>
            </div>

            <img src={crypto.icon} alt={crypto.name} width="50" />

            <h2>
              {crypto.name}
              {' '}
              (
              {crypto.symbol}
              )
            </h2>
            <p>
              Rank:
              {crypto.rank}
            </p>
            <p>
              Price:
              {crypto.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

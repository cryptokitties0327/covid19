import React, { useState, useEffect } from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import i18next from 'i18next';

import image from './images/image.png';


const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchData());
    }
    fetchAPI()
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);

    setData(data);
    setCountry(country)
  }

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  return (
    <div className={styles.container}>
      <nav >
        <button onClick={() => handleClick('en')}>
          English
        </button>
        <button onClick={() => handleClick('chi')}>
          中文
        </button>
      </nav>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
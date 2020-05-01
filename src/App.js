import React, { useState, useEffect, Fragment } from 'react';
import { Cards, CountryPicker, Chart, Buttons } from './components';
import { fetchData } from './api/';

import i18next from 'i18next';
import styles from './App.module.css';

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('en')

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);

    setData(data);
    setCountry(country)
  }

  const handleClick = (lang) => {
    i18next.changeLanguage(lang)
    setLanguage(lang)
  }

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchData());
    }
    fetchAPI()
  }, []);

  return (
    <Fragment>
      <Buttons handleClick={handleClick} />
      <div className={styles.container}>
        <p className={styles.text}>C<span className={styles.number}>O</span>VID-<span className={styles.number}>19</span></p>
        <Cards data={data} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Chart data={data} country={country} language={language} />
      </div>
    </Fragment>
  );
}

export default App;
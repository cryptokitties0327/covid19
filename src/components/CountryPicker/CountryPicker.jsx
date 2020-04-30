import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { useTranslation } from 'react-i18next';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">{t("Global")}</option>
        {countries.map((country, i) => <option key={i} value={country}>{t(country)}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
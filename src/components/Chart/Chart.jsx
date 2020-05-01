import React, { useState, useEffect } from 'react';
import { BarChart, LineChart } from '../index'
import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country, language }) => {

  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const barChart = (
    confirmed ? (
      <BarChart
        confirmed={confirmed}
        recovered={recovered}
        deaths={deaths}
        language={language}
        country={country}
      />
    ) : null
  );

  const lineChart = (
    dailyData[0] ? (
      <LineChart dailyData={dailyData} />
    ) : null
  );

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  );
};

export default Chart;
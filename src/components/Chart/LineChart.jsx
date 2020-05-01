import React from 'react';

import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

const LineChart = ({ dailyData }) => {
  const { t } = useTranslation();
  return (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [{
          data: dailyData.map((data) => data.confirmed),
          label: t('Infected'),
          borderColor: '#3333ff',
          fill: true,
        }, {
          data: dailyData.map((data) => data.deaths),
          label: t('Deaths'),
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          fill: true,
        },
        ],
      }}
    />
  );
};

export default LineChart;
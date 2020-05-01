import React from 'react';

import { Bar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

const BarChart = ({ confirmed, recovered, deaths, language, country }) => {
  const { t } = useTranslation();

  const textDisplay =
    language == "en" ? `${t("Current") + t(country)}`
      : `${t(country) + t("Current")}`

  return (
    <Bar
      data={{
        labels: [t('Infected'), t('Recovered'), t('Deaths')],
        datasets: [
          {
            label: 'People',
            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: textDisplay }
      }}
    />
  );
};

export default BarChart;
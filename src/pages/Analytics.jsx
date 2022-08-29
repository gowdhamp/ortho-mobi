import Chart from 'react-apexcharts';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import footprint from './../assets/images/footprint.png';
import { useSelector } from 'react-redux';

const chartOptions = {
  seriesemg: [
    {
      name: 'Normal leg (Avg)',
      data: [75, 89, 81, 96, 78, 112, 85, 125, 92],
    },
    {
      name: 'Ortho leg (Avg)',
      data: [77, 81, 75, 89, 122, 96, 75, 91, 103],
    },
  ],
  seriesall: [
    {
      name: 'Normal leg (Avg)',
      data: [75, 89, 81, 96, 78, 112, 85, 125, 92],
    },
    {
      name: 'Ortho leg (Avg)',
      data: [77, 81, 75, 89, 84, 106, 75, 119, 103],
    },
  ],
  options: {
    color: ['#6ab04c', '#2980b9'],
    chart: {
      background: 'transparent',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: [
        '6AM',
        '8AM',
        '10AM',
        '12PM',
        '2PM',
        '4PM',
        '6PM',
        '8AM',
        '10PM',
      ],
    },
    legend: {
      position: 'top',
    },
    grid: {
      show: false,
    },
  },
};

const Analytics = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);

  const [pressureDataLeft, setPressureDataLeft] = useState({
    id: '0',
    steps: '0',
    emg_rate: '0',
    pressure_point_1: '0',
    pressure_point_2: '0',
    pressure_point_3: '0',
    temperature: '0',
    timestamp: '0',
  });
  const [pressureDataRight, setPressureDataRight] = useState({
    id: '0',
    emg_rate: '0',
    pressure_point_1: '0',
    pressure_point_2: '0',
    pressure_point_3: '0',
    timestamp: '0',
  });

  useEffect(() => {
    setInterval(() => {
      axios
        .get('https://exploremychoice.in/sih/ortho-mobi/getdataleft.php')
        .then((response) => {
          setPressureDataLeft(response.data[0]);
        });

      axios
        .get('https://exploremychoice.in/sih/ortho-mobi/getdataright.php')
        .then((response) => {
          setPressureDataRight(response.data[0]);
        });
    }, 2000);
  }, [pressureDataLeft, pressureDataRight]);

  return (
    <div>
      <h2 className="page-header">Analytics</h2>
      <div className="row">
        <div className="col-5">
          <div className="card">
            <h3>Pressure</h3>
            <div className="img-container">
              <img src={footprint} alt="footprint" />
              <div
                title={pressureDataLeft.pressure_point_1}
                className={`pressure-point point-1 ${
                  pressureDataLeft.pressure_point_1 < 600
                    ? 'low'
                    : pressureDataLeft.pressure_point_1 < 1200
                    ? 'medium'
                    : 'high'
                }`}
              >
                1
              </div>
              <div
                title={pressureDataLeft.pressure_point_2}
                className={`pressure-point point-2 ${
                  pressureDataLeft.pressure_point_2 < 600
                    ? 'low'
                    : pressureDataLeft.pressure_point_2 < 1200
                    ? 'medium'
                    : 'high'
                }`}
              >
                2
              </div>
              <div
                title={pressureDataLeft.pressure_point_3}
                className={`pressure-point point-3 ${
                  pressureDataLeft.pressure_point_3 < 600
                    ? 'low'
                    : pressureDataLeft.pressure_point_3 < 1200
                    ? 'medium'
                    : 'high'
                }`}
              >
                3
              </div>
              <div
                title={pressureDataRight.pressure_point_1}
                className={`pressure-point point-4 ${
                  pressureDataRight.pressure_point_1 < 600
                    ? 'low'
                    : pressureDataRight.pressure_point_1 < 1200
                    ? 'medium'
                    : 'high'
                }`}
              >
                4
              </div>
              <div
                title={pressureDataRight.pressure_point_2}
                className={`pressure-point point-5 ${
                  pressureDataRight.pressure_point_2 < 600
                    ? 'low'
                    : pressureDataRight.pressure_point_2 < 1200
                    ? 'medium'
                    : 'high'
                }`}
              >
                5
              </div>
              <div
                title={pressureDataRight.pressure_point_3}
                className={`pressure-point point-6 ${
                  pressureDataRight.pressure_point_3 < 600
                    ? 'low'
                    : pressureDataRight.pressure_point_3 < 1200
                    ? 'medium'
                    : 'high'
                }`}
              >
                6
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="card full-height">
            <h3>Pressure Analysis</h3>
            <Chart
              options={
                themeReducer === 'theme-mode-dark'
                  ? {
                      ...chartOptions.options,
                      theme: { mode: 'dark' },
                    }
                  : {
                      ...chartOptions.options,
                      theme: { mode: 'light' },
                    }
              }
              series={chartOptions.seriesemg}
              type="line"
              height="90%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

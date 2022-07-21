import Chart from 'react-apexcharts';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import StatusCard from '../components/status-card/StatusCard';
import statusCards from '../assets/JsonData/status-card-data.json';
import { useEffect } from 'react';

const chartOptions = {
  seriesemg: [
    {
      name: 'Normal leg',
      data: [75, 89, 81, 96, 78, 112, 85, 125, 92],
    },
    {
      name: 'Ortho leg',
      data: [77, 81, 75, 89, 122, 96, 75, 91, 103],
    },
  ],
  seriesall: [
    {
      name: 'Normal leg',
      data: [75, 89, 81, 96, 78, 112, 85, 125, 92],
    },
    {
      name: 'Ortho leg',
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

const donetOptions = {
  series: [70],
  options: {
    labels: ['Progress'],
    colors: ['#3694e6'],
    plotOptions: {
      radialBar: {
        startAngle: -140,
        endAngle: 140,
        track: {
          background: '#2d2d2d',
          startAngle: -140,
          endAngle: 140,
        },
        dataLabels: {
          name: {
            show: true,
            color: '#ffffff',
            fontSize: '18px',
          },
          value: {
            color: '#3694e6',
            fontSize: '20px',
            show: true,
          },
        },
      },
    },
    stroke: {
      // lineCap: 'round',
      dashArray: 4,
    },
  },
};

const Dashboard = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);

  const [realData, setRealData] = useState(statusCards);
  const [stepCount, setStepCount] = useState(0);

  setTimeout(() => {
    setStepCount(stepCount + 1);
  }, 2000);

  useEffect(() => {
    setTimeout(() => {
      setRealData([
        {
          icon: 'bx bxl-baidu',
          count: `${stepCount}`,
          title: 'Total Steps',
        },
        {
          icon: 'bx bx-pulse',
          count: `${Math.floor(Math.random() * (20 - 7)) + 7} Hz`,
          title: 'PPG Rate',
        },
        {
          icon: 'bx bx-tachometer',
          count: `${Math.floor(Math.random() * (80 - 60)) + 60} kPa`,
          title: 'Pressure',
        },
        {
          icon: 'bx bxs-thermometer',
          count: `${Math.floor(Math.random() * (100 - 97)) + 97} °F`,
          title: 'Temperature',
        },
      ]);
    }, 1000);
  }, [realData]);

  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {realData.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height">
            <h3>Daily EMG Rate</h3>
            {/* chart */}
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
        <div className="col-4">
          <div className="card full-chart-height">
            {/* chart */}
            <Chart
              options={
                themeReducer === 'theme-mode-dark'
                  ? {
                      ...donetOptions.options,
                      theme: { mode: 'dark' },
                    }
                  : {
                      ...donetOptions.options,
                      theme: { mode: 'light' },
                    }
              }
              series={donetOptions.series}
              type="radialBar"
              height="100%"
            />
            <h4
              style={{
                marginTop: '10px',
                color: '#9e9e9e',
                textAlign: 'center',
              }}
            >
              You have been reached{' '}
              <span style={{ color: '#3694e6' }}>70%</span> of your Normal life
            </h4>
          </div>
        </div>
        <div className="col-8">
          <div className="card full-chart-height">
            <h3>Overall Analysis</h3>
            {/* chart */}
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
              series={chartOptions.seriesall}
              type="line"
              height="90%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

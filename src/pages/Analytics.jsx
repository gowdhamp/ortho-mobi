// import axios from 'axios';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import footprint from './../assets/images/footprint.png';

const Analytics = () => {
  // const ThemeReducer = useSelector((state) => state.ThemeReducer.mode);

  const [pressureData, setPressureData] = useState({
    id: '0',
    total_steps: '0',
    ppg_rate_hz: '0',
    pressure_point_1: '0',
    pressure_point_2: '0',
    pressure_point_3: '0',
    pressure_point_4: '0',
    pressure_point_5: '0',
    pressure_point_6: '0',
    temp_in_fer: '0',
    timestamp: '0',
  });

  useEffect(() => {
    axios
      .get('https://exploremychoice.in/sih/ortho-mobi/getdata.php')
      .then((response) => {
        setPressureData(response.data[0]);
      });
  }, [pressureData]);

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
                title={pressureData.pressure_point_1}
                className={`pressure-point point-1 ${
                  pressureData.pressure_point_1 < 600
                    ? 'low'
                    : pressureData.pressure_point_1 < 1200
                    ? 'medium'
                    : 'high'
                }`}
              >
                1
              </div>
              <div
                title={pressureData.pressure_point_2}
                className={`pressure-point point-2 ${
                  pressureData.pressure_point_2 < 600
                    ? 'low'
                    : pressureData.pressure_point_2 < 1200
                    ? 'medium'
                    : 'high'
                }`}
              >
                2
              </div>
              <div
                title={pressureData.pressure_point_3}
                className={`pressure-point point-3 ${
                  pressureData.pressure_point_3 < 600
                    ? 'low'
                    : pressureData.pressure_point_3 < 1200
                    ? 'medium'
                    : 'high'
                }`}
              >
                3
              </div>
              <div
                title={pressureData.pressure_point_4}
                className={`pressure-point point-4 ${
                  pressureData.pressure_point_4 < 600
                    ? 'low'
                    : pressureData.pressure_point_4 < 1200
                    ? 'medium'
                    : 'high'
                }`}
              >
                4
              </div>
              <div
                title={pressureData.pressure_point_5}
                className={`pressure-point point-5 ${
                  pressureData.pressure_point_5 < 600
                    ? 'low'
                    : pressureData.pressure_point_5 < 1200
                    ? 'medium'
                    : 'high'
                }`}
              >
                5
              </div>
              <div
                title={pressureData.pressure_point_6}
                className={`pressure-point point-6 ${
                  pressureData.pressure_point_6 < 600
                    ? 'low'
                    : pressureData.pressure_point_6 < 1200
                    ? 'medium'
                    : 'high'
                }`}
              >
                6
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

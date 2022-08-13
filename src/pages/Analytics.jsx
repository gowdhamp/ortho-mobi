import React from 'react';
import footprint from './../assets/images/footprint.png';

const Analytics = () => {
  return (
    <div>
      <h2 className="page-header">Analytics</h2>
      <div className="row">
        <div className="col-4">
          <div className="card">
            <h3>Pressure</h3>
            <div className="img-container">
              <img src={footprint} alt="footprint" />
              <div title="hello" className="pressure-point point-1 low"></div>
              <div className="pressure-point point-2 low"></div>
              <div className="pressure-point point-3 medium"></div>
              <div className="pressure-point point-4 high"></div>
              <div className="pressure-point point-5 high"></div>
              <div className="pressure-point point-6 medium"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

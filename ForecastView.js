import React from "react";

function ForecastView({ forecastData }) {
  return (
    <div className="forecast-view">
      <h2>Forecasted Sales Data</h2>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          {forecastData.map((item, index) => (
            <tr key={index}>
              <td>{item.month}</td>
              <td>{item.sales.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ForecastView;

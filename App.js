import React, { useState } from "react";
import "./App.css";
import DataUpload from "./components/DataUpload";
import ForecastView from "./components/ForecastView";
import ForecastChart from "./components/ForecastChart";

function App() {
  const [salesData, setSalesData] = useState([]);
  const [forecastData, setForecastData] = useState([]);

  // Function to process uploaded sales data
  const handleDataUpload = (data) => {
    setSalesData(data);
    calculateForecast(data);
  };

  // Function to calculate forecast data
  const calculateForecast = (data) => {
    const forecast = [];
    const lastValue = data[data.length - 1]?.sales || 0;
    for (let i = 1; i <= 12; i++) {
      forecast.push({ month: `Month ${data.length + i}`, sales: lastValue * 1.05 ** i });
    }
    setForecastData(forecast);
  };

  return (
    <div className="App">
      <h1>Sales Forecasting Dashboard</h1>
      <DataUpload onDataUpload={handleDataUpload} />
      {salesData.length > 0 && (
        <>
          <ForecastChart salesData={salesData} forecastData={forecastData} />
          <ForecastView forecastData={forecastData} />
        </>
      )}
    </div>
  );
}

export default App;

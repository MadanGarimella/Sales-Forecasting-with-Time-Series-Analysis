import React from "react";
import { Line } from "react-chartjs-2";

function ForecastChart({ salesData, forecastData }) {
  const data = {
    labels: [...salesData.map((item) => item.month), ...forecastData.map((item) => item.month)],
    datasets: [
      {
        label: "Actual Sales",
        data: salesData.map((item) => item.sales),
        borderColor: "blue",
        backgroundColor: "lightblue",
        tension: 0.4,
      },
      {
        label: "Forecasted Sales",
        data: [...Array(salesData.length).fill(null), ...forecastData.map((item) => item.sales)],
        borderColor: "green",
        backgroundColor: "lightgreen",
        tension: 0.4,
      },
    ],
  };

  return <Line data={data} />;
}

export default ForecastChart;

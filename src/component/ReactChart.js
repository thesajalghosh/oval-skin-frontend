// PieChart.js
import React from "react";
import ReactApexChart from "react-apexcharts";

const ReactChart = ({ dataObj }) => {
  // Filter out zero values
  const entries = Object.entries(dataObj).filter(([_, v]) => v > 0);
  const labels = entries.map(([k]) => k);
  const series = entries.map(([_, v]) => v);

  const options = {
    labels,
    legend: { position: "bottom" },
    chart: { type: "pie" },
    dataLabels: { enabled: true },
    colors: [
      "#2563eb", "#f59e42", "#10b981", "#f43f5e",
      "#a78bfa", "#fbbf24", "#6366f1", "#14b8a6"
    ],
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="pie" width="100%" height={320} />
    </div>
  );
};

export default ReactChart;
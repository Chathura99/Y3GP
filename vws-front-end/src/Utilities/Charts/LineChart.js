import React from "react";
import { Chart } from "react-google-charts";

// export const data = [
//   ["Month", "1", "2","3"],
//   ["Jan", 100, 40, 10],
//   ["Feb", 117, 46, 20],
//   ["Mar", 66, 112, 50],
//   ["Apr", 103, 54, 40],
//   ["May", 117, 46, 20],
//   ["Jun", 66, 112, 50],
//   ["Jul", 103, 54, 40],
// ];

export const options = {
  title: "",
  // curveType: "function",
  legend: { position: "bottom" },
  colors: ["#145369", "#BE2596", "#96BE25"],
  pointSize: 5,
};

export function LineChart(props) {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={props.data}
      options={options}
    />
  );
}

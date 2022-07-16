import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Project", "Count"],
  ["Ganitha Saviya", 11],
  ["Re-Green Earth", 2],
  ["Lohithuppada", 2],
  ["Scholarship", 2],
  ["Sarasavi Piyageta", 7], // CSS-style declaration
];

export const options = {
  title: "Donut Chart",
  pieHole: 0.4,
  is3D: false,
  colors: ['#2596BE', '#96BE25', '#BE4D25', '#145369', '#BE2596']
};

export function DonutChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}



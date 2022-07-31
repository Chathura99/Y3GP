import React from "react";
import { Chart } from "react-google-charts";

// export const data = [
//   ["Project", "Count"],
//   ["Ganitha Saviya", 11],
//   ["Re-Green Earth", 2],
//   ["Lohithuppada", 2],
//   ["Scholarship", 2],
//   ["Sarasavi Piya", 7],
// ];

export const options = {
  title: "",
  pieHole: 0.4,
  is3D: false,
  colors: ["#2596BE", "#96BE25", "#BE4D25", "#145369", "#BE2596"],
  chartArea: { width: 320, height: 320 },
  legend: {
    alignment: "center",
  },
};

export default function DonutChart(props) {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="250px"
      data={props.data}
      options={options}
    />
  );
}

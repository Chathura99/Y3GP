import React from "react";
import { Chart } from "react-google-charts";

// export const data = [
//   ["Month", "Completed", "Upcoming", "Cancelled"],
//   ["Jan", 100, 40, 20],
//   ["Feb", 117, 46, 25],
//   ["Mar", 66, 112, 30],
//   ["Apr", 103, 54, 5],
// ];

export const options = {
  chart: {
    title: "",
    subtitle: "Sub title",
  },
  colors: ["#145369", "#BE2596", "#BE4D25"],
};

export function BarChart(props) {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={props.data}
      options={options}
    />
  );
}

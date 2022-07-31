import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  // title: "Poll Results",
  colors: ["#2596BE", "#BE2596", "#145369", "#BE4D25", "#96BE25"],
  chartArea: { width: 320, height: 320 },
  legend: {
    alignment: "center",
  },
};
// const data = [
//   ["Task", "votes"],
//   ["Lohithuthpada", 11],
//   ["Re-green Earth", 2],
// ];
export default function PieChart(props) {
  return (
    <Chart
      chartType="PieChart"
      data={props.data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

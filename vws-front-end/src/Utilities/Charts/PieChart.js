import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["1", 11],
  ["2", 2],
  
  ["3", 2],
  ["4", 2],
  ["5", 7],
];

export const options = {
  title: "Pie Chart",
  colors: ['#96BE25','#2596BE',  '#BE4D25', '#145369', '#BE2596'],
};

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

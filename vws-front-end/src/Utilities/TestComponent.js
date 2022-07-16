import React from "react";
import Table from "./Table/Table";
import { BarChart } from "./Charts/BarChart";
import { DonutChart } from "./Charts/DonutChart";
import { LineChart } from "./Charts/LineChart";
import { PieChart } from "./Charts/PieChart";
import Form from "./Form/Form";

const TestComponent = () => {
  return (
    <div className="container">
      Test Component
      <Table />
      <DonutChart />
      <PieChart />
      <BarChart />
      <LineChart />
      <br />
      <Form />
      <br/>
      <div>
        <div class="row gutters">
          <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="card h-100">
              <div class="card-body">
               left
              </div>
            </div>
          </div>
          <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="card h-100">
              <div class="card-body">
                <div class="row gutters">line 1</div>
                <div class="row gutters ">line 2</div>
                <div class="row gutters">line 3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
    </div>
  );
};

export default TestComponent;

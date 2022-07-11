import React from 'react';
import { BarChart } from './Charts/BarChart';
import { DonutChart } from './Charts/DonutChart';
import { LineChart } from './Charts/LineChart';
import { PieChart } from './Charts/PieChart';

const TestComponent = () => {
    return (
        <div className='container'>
            Test Component
            <DonutChart/>
            <PieChart/>
            <BarChart/>
            <LineChart/>
        </div>
    );
};

export default TestComponent;
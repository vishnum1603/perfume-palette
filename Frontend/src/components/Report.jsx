import React from 'react';
import BarChart from './BarChart';
import PieChartActive from './PieChartActive';

export default function ReportWithPieChart() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <BarChart/>
      </div>
      <div style={{ flex: 1 , margin:'auto' , marginRight:'10%'}}>
        <PieChartActive/>
      </div>
    </div>
  );
}

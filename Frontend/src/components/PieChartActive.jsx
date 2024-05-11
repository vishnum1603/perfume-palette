import * as React from 'react';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 1200, label: 'series A' },
  { id: 1, value: 678, label: 'series B' },
  { id: 2, value: 200, label: 'series C' },
];

export default function PieChartActive() {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30 },
        },
      ]}
      sx={{
        [`& .${pieArcClasses.faded}`]: {
          fill: 'gray',
        },
      }}
      height={250}
      labelDisplay="inside"
      labelPosition="filled"
    />
  );
}

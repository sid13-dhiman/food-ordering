import React from 'react'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const data ={
    labels: ['Mon', 'Tue', 'Wed'],
    datasets: [
      {
        label: '369',
        data: [3, 6, 9],
        backgroundColor: 'aqua',
        borderColor: 'black',
        borderWidth: 1,
      },
      {
        label: '333',
        data: [3, 3, 3],
        backgroundColor: 'coral',
        borderColor: 'black',
        borderWidth: 1,
      }
    ]
  }

  const options = {
    maintainAspectRatio: false, // Prevent the chart from maintaining its aspect ratio
    responsive: true, // Allow the chart to be responsive, but we control it with fixed dimensions
    scales: {
      x: {
        stacked: false, // If you want the bars to be stacked on the x-axis
      },
      y: {
        stacked: false, // If you want the bars to be stacked on the y-axis
      },
    },
  };

  return (
    <div style={{ padding: '20px', width: '80%' }}>
      <div style={{ width: '100%', height: '400px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}

export default Dashboard

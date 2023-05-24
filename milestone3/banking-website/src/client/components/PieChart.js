import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Savings', 'Checking', 'Investments'],
    datasets: [
      {
        data: [50000, 30000, 20000],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Client Data Pie Chart</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;

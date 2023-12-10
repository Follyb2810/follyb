import { Box, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimeStamp = [];
 
  for (let i = 1; i < coinHistory?.data?.history.length; i += 1) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
  }


  // const data = {
  //   labels: coinTimeStamp,
  //   datasets: [
  //     {
  //       label: 'Price In USD',
  //       data:coinPrice,
  //       backgroundColor: '#0071bd',
  //       borderColor: '#0071bd',
  //     },
  //   ],
  // };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    // Optional accessibility features
    accessibility: {
      // Enable element grouping for screen reader users
      grouping: {
        enabled: true
      }
    },
    // Optional tooltips that have been checked for accessibility
    tooltips: {
      enabled: true
    }
  };

  const ref = useRef();

  const data = {
    labels: coinTimeStamp,
    // labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        // data: [33, 53, 85, 41, 44, 65],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)'
      }
    ],
  }
  

  return (
    <Box>
      <Box>
        <Typography tabIndex="0">{coinName}</Typography>
        <Typography tabIndex="0">{coinHistory?.data?.change}%</Typography>
      </Box>
    

    <Line ref={ref} data={data} options={options}/>
    </Box>
  );
};

export default LineChart;
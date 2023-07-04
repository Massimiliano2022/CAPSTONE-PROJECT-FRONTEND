import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJs,
    LineElement,
    CategoryScale, //x asse
    LinearScale, //y asse
    PointElement,
    Legend,
    Tooltip,
    Filler
} from 'chart.js';

ChartJs.register(LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
    Filler
)

const MyLineChart = ({ chartData }) => {

    console.log(chartData);

    const data = {
        labels: chartData.labels,
        datasets: [{
            label: 'BTC',
            data: chartData.values,
            //backgroundColor: '#EBB60B',
            backgroundColor:'#2D2D2D',
            borderColor: '#EBB60B',
            pointBorderColor: '#1E1E1E',
            pointBackgroundColor:'black',
            //fill:true,
            tension: 0.3
        }]
    }

    const options = {
        plugins: {
            legend: false,
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2
        },
        scales: {
            y: {
                ticks: { color: 'white', beginAtZero: true }
              },
              x: {
                ticks: { color: 'white', beginAtZero: true }
              }
        },
        responsive: true,
        maintainAspectRatio: false
    }
    return (
        <div className="line-chart">
            <Line data={data} options={options} style={{ height: "100%", width:"100%" }} />
        </div>
    );
};

export default MyLineChart;
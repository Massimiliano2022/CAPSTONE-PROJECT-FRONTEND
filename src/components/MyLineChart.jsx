import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJs,
    LineElement,
    CategoryScale, //x asse
    LinearScale, //y asse
    PointElement,
    Legend,
    Tooltip
} from 'chart.js';

ChartJs.register(LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)

const MyLineChart = ({ chartData }) => {

    console.log(chartData);

    const data = {
        labels: chartData.labels,
        datasets: [{
            label: 'BTC',
            data: chartData.values,
            backgroundColor: 'white',
            borderColor: '#EBB60B',
            pointBorderColor: 'white',
            tension: 0.25
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
                beginAtZero: false,
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
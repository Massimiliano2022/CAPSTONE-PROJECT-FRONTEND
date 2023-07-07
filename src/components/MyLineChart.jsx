import { useEffect } from 'react';
import { getMonthlyCryptoData } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

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

const MyLineChart = ({ simbolo }) => {

    const monthlyCryptoData = useSelector(state => state.monthlyCryptoData.monthlyData);

    /*const chartData = {
        labels: [],
        values: [],
    };*/

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMonthlyCryptoData(simbolo));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [simbolo]);

    /*if (monthlyCryptoData && monthlyCryptoData.length > 0) {
        chartData.labels = monthlyCryptoData.map((record) => record.data);
        chartData.values = monthlyCryptoData.map((record) => record.chiusuraPrezzo);
    }*/

    const data = {
        labels: monthlyCryptoData.map((record) => record.data),
        datasets: [{
            label: simbolo,
            data: monthlyCryptoData.map((record) => record.chiusuraPrezzo),
            backgroundColor:'#2D2D2D',
            borderColor: '#EBB60B',
            pointBorderColor: '#1E1E1E',
            pointBackgroundColor:'black',
            //tension: 0.1
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
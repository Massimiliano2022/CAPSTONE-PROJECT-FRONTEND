import moment from 'moment';

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

const MyLineChart = ({ simbolo, selectedCrypto }) => {
    
    const dispatch = useDispatch();

    const monthlyCryptoData = useSelector(state => state.monthlyCryptoData.monthlyData);

    useEffect(() => {
        dispatch(getMonthlyCryptoData(simbolo));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [simbolo]);

    const updatedMonthlyCryptoData = [...monthlyCryptoData];

    if (selectedCrypto) {
        const updatedData = {
            data: moment(selectedCrypto.timestamp).format('YYYY-MM-DD'),
            chiusuraPrezzo: selectedCrypto.prezzo,
        };
        updatedMonthlyCryptoData.push(updatedData);
    }

    const data = {
        labels: updatedMonthlyCryptoData.map(record => record.data),
        datasets: [{
            label: simbolo,
            data: updatedMonthlyCryptoData.map(record => record.chiusuraPrezzo),
            backgroundColor: '#2D2D2D',
            borderColor: '#EBB60B',
            pointBorderColor: '#1E1E1E',
            pointBackgroundColor: 'black',
        }]
    };

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
    };

    return (
        <div className="line-chart">
            <Line data={data} options={options} style={{ height: "100%", width: "100%" }} />
        </div>
    );
};

export default MyLineChart;
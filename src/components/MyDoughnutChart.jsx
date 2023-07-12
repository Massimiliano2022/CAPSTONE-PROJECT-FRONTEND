import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const MyDoughnutChart = ({ walletCorrente }) => {

    const cryptoValues = walletCorrente.listaAsset.map(asset => asset.crypto.prezzo * asset.quantita);
    const totaleParzialeSaldo = cryptoValues.reduce((a, b) => a + b, 0) + walletCorrente.saldoDisponibile;
    const percentualeAsset = cryptoValues.map(value => (value / totaleParzialeSaldo) * 100);
    percentualeAsset.push((walletCorrente.saldoDisponibile / totaleParzialeSaldo) * 100);

    const chartData = {
        labels: [...walletCorrente.listaAsset.map(asset => asset.crypto.simbolo), 'USDT'],
        values: [...percentualeAsset]
    };

    const data = {
        labels: chartData.labels,
        datasets: [
            {
                label: '%',
                data: chartData.values,
                backgroundColor: [
                    'rgba(255, 204, 0, 0.9)',
                    'rgba(86, 180, 233, 0.9)',
                    'rgba(49, 165, 159, 0.9)',
                    'rgba(225, 68, 52, 0.9)',
                    'rgba(102, 197, 204, 0.9)',
                    'rgba(0, 111, 184, 0.9)',
                    'rgba(255, 186, 0, 0.9)',
                    'rgba(216, 189, 125, 0.9)',
                ],
                borderColor: [
                    'rgba(255, 204, 0, 1)',
                    'rgba(86, 180, 233, 1)',
                    'rgba(49, 165, 159, 1)',
                    'rgba(225, 68, 52, 1)',
                    'rgba(102, 197, 204, 1)',
                    'rgba(0, 111, 184, 1)',
                    'rgba(255, 186, 0, 1)',
                    'rgba(216, 189, 125,1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
    };

    const getChartHeight = () => {
        const width = window.innerWidth;
        if (width <= 767) {
            return '300px';
        } else if (width >= 768 && width <= 991) {
            return '350px';
        } else{
            return '400px';
        }
    };

    const chartHeight = getChartHeight();

    return (
        <Doughnut data={data} options={options} style={{ height: chartHeight }} />
    );
}
export default MyDoughnutChart;
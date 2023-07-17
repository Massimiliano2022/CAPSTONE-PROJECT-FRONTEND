import { useEffect } from "react";
import { Card,Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMonthlyCryptoData } from "../redux/actions";
import moment from "moment";

const MyCryptoPriceHistory = ({ simbolo, selectedCrypto }) => {

    const monthlyCryptoData = useSelector(state => state.monthlyCryptoData.monthlyData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMonthlyCryptoData(simbolo));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [simbolo]);

    const updatedMonthlyCryptoData = [...monthlyCryptoData];

    if (selectedCrypto) {
        const formattedDate = moment(selectedCrypto.timestamp).format('YYYY-MM-DD');
        const updatedData = {
            data: formattedDate,
            chiusuraPrezzo: selectedCrypto.prezzo,
        };
        updatedMonthlyCryptoData.push(updatedData);
    }

    updatedMonthlyCryptoData.reverse();

    return (

        <Card style={{ background: "#2d2d2d" }}>
            <Card.Body>
                <Card.Title className="mb-3">Storico dei prezzi {simbolo}/USD</Card.Title>
                <Table className='text-light m-0 table table-dark table-striped'>
                    <thead>
                        <tr>
                            <th>Periodo</th>
                            <th>Prezzo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {updatedMonthlyCryptoData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.data}</td>
                                <td>{data.chiusuraPrezzo ? data.chiusuraPrezzo.toFixed(4) : ''}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}
export default MyCryptoPriceHistory;
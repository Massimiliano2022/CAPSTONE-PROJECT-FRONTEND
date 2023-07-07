import { useEffect } from "react";
import { Card,Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMonthlyCryptoData } from "../redux/actions";

const MyCryptoPriceHistory = ({ simbolo, selectedCrypto }) => {

    const monthlyCryptoData = useSelector(state => state.monthlyCryptoData.monthlyData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMonthlyCryptoData(simbolo));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [simbolo]);

    const formatData = (dateString) => {
        const date = new Date(dateString);
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        const formattedDate = `${date.getFullYear()}-${month}-${day}`;
        return formattedDate;
    };

    const updatedMonthlyCryptoData = [...monthlyCryptoData];

    if (selectedCrypto) {
        const formattedDate = formatData(selectedCrypto.timestamp);
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
                <Table className='text-light m-0'>
                    <thead style={{ background: "#0B0E11" }}>
                        <tr>
                            <th>Periodo</th>
                            <th>Prezzo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {updatedMonthlyCryptoData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.data}</td>
                                <td>{data.chiusuraPrezzo}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}
export default MyCryptoPriceHistory;
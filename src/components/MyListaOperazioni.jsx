import moment from 'moment';
import { useEffect, useState } from 'react';
import { Card, Spinner, Table } from "react-bootstrap";

const MyListaOperazioni = ({ walletCorrente }) => {

    const [reverseLista, setReverseLista] = useState([]);

    useEffect(() => {
        if (walletCorrente) {
            const reversedList = [...walletCorrente.listaOperazioni].reverse();
            setReverseLista(reversedList);
        }
    }, [walletCorrente]);

    return (
        <>
            {!walletCorrente && !walletCorrente.listaOperazioni ? (
                <div className="d-flex justify-content-center align-items-center" >
                    <Spinner animation="grow" variant="warning" />
                </div>
            ) : (
                <Card className="mb-5 d-none d-sm-none d-md-block" style={{ background: "#2d2d2d" }}>
                    <Card.Body>
                        <Card.Title className="mb-3">Storico operazioni</Card.Title>
                        <Table className='text-light m-0 wallet-table'>
                            <thead style={{ background: "#0B0E11" }}>
                                <tr>
                                    <th>Data operazione</th>
                                    <th>Tipo operazione</th>
                                    <th>Crypto</th>
                                    <th>Quantità</th>
                                    <th>Prezzo acquisto</th>
                                    <th>Prezzo vendita</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reverseLista && reverseLista.map((operazione) => (
                                    <tr key={operazione.id}>
                                        <td>{moment(operazione.dataOperazione).format('DD/MM/YYYY HH:mm:ss')}</td>
                                        <td>{operazione.tipoOperazione}</td>
                                        <td>{operazione.crypto.simbolo}</td>
                                        <td>{operazione.quantita}</td>
                                        <td>{operazione.prezzoAcquisto}</td>
                                        <td>{operazione.prezzoVendita}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            )}
        </>
    );
}
export default MyListaOperazioni;
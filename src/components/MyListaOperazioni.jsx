import moment from 'moment';
import { useEffect, useState } from 'react';
import { Alert, Button, Card, Form, Spinner, Table } from "react-bootstrap";
import { getlistaOperazioni } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import ReactDatePicker from 'react-datepicker';

const MyListaOperazioni = ({ utenteCorrente }) => {

    const dispatch = useDispatch();

    const listaOperazioni = useSelector(state => state.listaOperazioni.listaOperazioni);

    const [currentPage, setCurrentPage] = useState(0);

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [tipoOperazioneForm, setTipoOperazioneForm] = useState("");
    const [selectedCryptoForm, setSelectedCryptoForm] = useState("");

    useEffect(() => {
        setCurrentPage(0);
    }, [tipoOperazioneForm, selectedCryptoForm]);

    useEffect(() => {
        let url = `http://localhost:3001/operazioni/me?page=${currentPage}&order=dataOperazione`;
        if (tipoOperazioneForm !== "") {
            url += `&tipoOperazione=${tipoOperazioneForm}`;
        }
        if (selectedCryptoForm !== "") {
            url += `&simboloCrypto=${selectedCryptoForm}`;
        }
        if (startDate) {
            const encodedStartDate = encodeURIComponent(startDate);
            url += `&startDate=${encodedStartDate}`;
        }
        if (endDate) {
            const encodedEndDate = encodeURIComponent(endDate);
            url += `&endDate=${encodedEndDate}`;
        }
        dispatch(getlistaOperazioni(utenteCorrente.jwtToken, url));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [utenteCorrente, currentPage, tipoOperazioneForm, selectedCryptoForm, startDate, endDate]);

    return (
        <>
            {!listaOperazioni || !listaOperazioni.content ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }} >
                    <Spinner animation="grow" variant="warning" />
                </div>
            ) : (
                <Card className="mb-5 d-none d-sm-none d-md-block" style={{ background: "#2d2d2d" }}>
                    <Card.Body>
                        <Card.Title className="mb-3">Storico operazioni</Card.Title>
                        <Form className='d-flex align-items-center  mb-3'>
                            <Form.Group className="me-3">
                                <Form.Control
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="bg-dark text-white"
                                />
                            </Form.Group>
                            <Form.Group className="me-3">
                                <Form.Control
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="bg-dark text-white"
                                />
                            </Form.Group>
                            <Form.Select
                                size="sm"
                                aria-label="tipoOperazione"
                                className='me-3 bg-dark text-white'
                                onChange={(event) => setTipoOperazioneForm(event.target.value)}
                            >
                                <option value="">Tipo operazione</option>
                                <option value="BUY">BUY</option>
                                <option value="SELL">SELL</option>
                            </Form.Select>
                            <Form.Select
                                size="sm"
                                aria-label="crypto"
                                className='bg-dark text-white me-3'
                                onChange={(event) => setSelectedCryptoForm(event.target.value)}
                            >
                                <option value="">Crypto</option>
                                <option value="BTC">BTC</option>
                                <option value="ETH">ETH</option>
                                <option value="ADA">ADA</option>
                                <option value="DOT">DOT</option>
                                <option value="MATIC">MATIC</option>
                                <option value="XRP">XRP</option>
                                <option value="DOGE">DOGE</option>
                                <option value="SAND">SAND</option>
                            </Form.Select>
                        </Form>
                        {listaOperazioni.content.length > 0 ? (
                            <>
                                <Table className='text-light m-0 table table-dark table-striped'>
                                    <thead>
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
                                        {listaOperazioni.content.map((operazione) => (
                                            <tr key={operazione.id} className="border-1">
                                                <td>{moment(operazione.dataOperazione).format('DD/MM/YYYY HH:mm:ss')}</td>
                                                <td>{operazione.tipoOperazione}</td>
                                                <td>{operazione.crypto.simbolo}</td>
                                                <td>{operazione.quantita}</td>
                                                <td>{operazione.prezzoAcquisto !== 0 ? operazione.prezzoAcquisto.toFixed(4) : '-'}</td>
                                                <td>{operazione.prezzoVendita !== 0 ? operazione.prezzoVendita.toFixed(4) : '-'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <div className='my-3 d-flex justify-content-center'>
                                    {listaOperazioni && (
                                        <>
                                            <Button
                                                className="text-white me-3"
                                                variant="outline-secondary"
                                                disabled={listaOperazioni.first}
                                                onClick={() => setCurrentPage(currentPage - 1)}>
                                                Pagina precedente
                                            </Button>
                                            <Button
                                                className="text-white"
                                                variant="outline-secondary"
                                                disabled={listaOperazioni.last}
                                                onClick={() => setCurrentPage(currentPage + 1)}>
                                                Pagina successiva
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="d-flex justify-content-between align-items-center mt-2">
                                <Alert className="w-100 text-center" variant="secondary">Nessun risultato da mostrare.</Alert>
                            </div>
                        )}
                    </Card.Body>
                </Card>
            )}
        </>
    );
}
export default MyListaOperazioni;
import btcLogo from '../img/bitcoin.png'
import ethLogo from '../img/ethereum.png'
import adaLogo from '../img/cardano.png'
import dotLogo from '../img/polkadot.png'
import maticLogo from '../img/polygon.png'
import xrpLogo from '../img/ripple.png'
import dogeLogo from '../img/dogecoin.png'
import sandLogo from '../img/sandbox.png'

import { Card, Col, Container, Row, Table } from "react-bootstrap";
import MyLineChart from './MyLineChart';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getSelectedCrypto } from '../redux/actions'
import { useParams } from 'react-router-dom'
import MyOperazione from './MyOperazione'

const cryptoLogos = {
    btc: btcLogo,
    eth: ethLogo,
    ada: adaLogo,
    dot: dotLogo,
    matic: maticLogo,
    xrp: xrpLogo,
    doge: dogeLogo,
    sand: sandLogo
};

const MyCrypto = () => {

    const dispatch = useDispatch();

    const { simbolo } = useParams();

    const cryptoSymbol = simbolo.toLowerCase();

    //const utenteCorrente = useSelector(state => state.utenteCorrente.userData);

    const selectedCrypto = useSelector(state => state.currentCryptoData.selectedCrypto);

    const timeoutRef = useRef(null);

    useEffect(() => {
        const fetchData = () => {
            dispatch(getSelectedCrypto(simbolo));
        };

        fetchData(); // Eseguiamo subito la prima fetch all'avvio del componente

        const startTimer = () => {
            timeoutRef.current = setTimeout(() => {
                fetchData();
                startTimer();
            }, 60000);
        };

        const resetTimer = () => {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        };

        startTimer(); // Avviamo il timer all'avvio del componente

        return () => {
            resetTimer(); // Alla dismissione del componente, resettiamo il timer
        };
    }, [dispatch, simbolo]);


    const variazioneColor = selectedCrypto.percententuale_variazione_1h < 0 ? "#E31903" : "#0FC67E";

    console.log(selectedCrypto);

    return (
        <>
            <Container fluid className="text-light px-5" style={{ background: "#1E1E1E" }}>
                <Row className="pt-5">
                    <Col sm={12}>
                        <div className="d-flex align-items-center mb-4">
                            <img src={cryptoLogos[cryptoSymbol]} alt={cryptoLogos[cryptoSymbol]} width={40} className="me-4" />
                            <h2 className="me-4">Valore {selectedCrypto.nome}</h2>
                            <p className="text-muted mb-0">{simbolo}</p>
                        </div>
                        <p className="fs-3">$ {selectedCrypto.prezzo} <span style={{ color: variazioneColor }}>{selectedCrypto.percententuale_variazione_1h}</span></p>
                    </Col>
                </Row>
                <Row className="pb-5">
                    <Col sm={12} md={8}>
                        <Card className="mb-4" style={{ background: "#2d2d2d" }}>
                            <Card.Body>
                                <MyLineChart simbolo={simbolo} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={4}>
                        <MyOperazione logo={cryptoLogos[cryptoSymbol]} selectedCrypto={selectedCrypto}/>
                    </Col>
                </Row>
                <Row className="pb-5">
                    <Col sm={12} md={8}>
                        <Card style={{ background: "#2d2d2d" }}>
                            <Card.Body>
                                <Card.Title className="mb-3">Storico dei prezzi BTC/USD</Card.Title>
                                <Table className='text-light m-0'>
                                    <thead style={{ background: "#0B0E11" }}>
                                        <tr>
                                            <th>Periodo</th>
                                            <th>Prezzo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Oggi</td>
                                            <td>$ 30518.4</td>
                                        </tr>
                                        <tr>
                                            <td>30 giorni</td>
                                            <td>$ 30472.9</td>
                                        </tr>
                                        <tr>
                                            <td>60 giorni</td>
                                            <td>$ 27216.1</td>
                                        </tr>
                                        <tr>
                                            <td>90 giorni</td>
                                            <td>$ 29252.1</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="d-none d-sm-none d-md-block">
                        <Card style={{ background: "#2d2d2d" }}>
                            <Card.Body>
                                <Card.Title className="mb-3">Crypto di tendenza</Card.Title>
                                <Table className='text-light m-0'>
                                    <tbody className="d-flex flex-column">
                                        <tr className="d-flex flex-row justify-content-between align-items-center">
                                            <td className="d-flex align-items-center p-0">
                                                <img src={ethLogo} alt="Ethereum Logo" width={30} className="img-fluid object-fit-cover" />
                                                <span className="fs-6 ms-2">ETH</span>
                                            </td>
                                            <td className="fs-6">$ 1935.69</td>
                                        </tr>
                                        <tr className="d-flex flex-row justify-content-between align-items-center">
                                            <td className="d-flex align-items-center p-0">
                                                <img src={adaLogo} alt="Cardano Logo" width={30} />
                                                <span className="fs-6 ms-2">ADA</span>
                                            </td>
                                            <td className="fs-6">$ 0.2819</td>
                                        </tr>
                                        <tr className="d-flex flex-row justify-content-between align-items-center">
                                            <td className="d-flex align-items-center p-0">
                                                <img src={dotLogo} alt="Polkadot Logo" width={30} />
                                                <span className="fs-6 ms-2">DOT</span>
                                            </td>
                                            <td className="fs-6">$ 5.29</td>
                                        </tr>
                                        <tr className="d-flex flex-row justify-content-between align-items-center">
                                            <td className="d-flex align-items-center p-0">
                                                <img src={maticLogo} alt="Polygon Logo" width={30} />
                                                <span className="fs-6 ms-2">MATIC</span>
                                            </td>
                                            <td className="fs-6">$ 0.6699</td>
                                        </tr>
                                        <tr className="d-flex flex-row justify-content-between align-items-center">
                                            <td className="d-flex align-items-center p-0">
                                                <img src={xrpLogo} alt="Ripple Logo" width={30} />
                                                <span className="fs-6 ms-2">XRP</span>
                                            </td>
                                            <td className="fs-6">$ 0.6699</td>
                                        </tr>
                                        <tr className="d-flex flex-row justify-content-between align-items-center">
                                            <td className="d-flex align-items-center p-0">
                                                <img src={dogeLogo} alt="Dogecoin Logo" width={30} />
                                                <span className="fs-6 ms-2">DOGE</span>
                                            </td>
                                            <td className="fs-6">$ 0.6699</td>
                                        </tr>
                                        <tr className="d-flex flex-row justify-content-between align-items-center">
                                            <td className="d-flex align-items-center p-0">
                                                <img src={sandLogo} alt="The Sandbox Logo" width={30} />
                                                <span className="fs-6 ms-2">SAND</span>
                                            </td>
                                            <td className="fs-6">$ 0.6699</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default MyCrypto;
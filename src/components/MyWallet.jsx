import btcLogo from '../img/bitcoin.png'
import ethLogo from '../img/ethereum.png'
import adaLogo from '../img/cardano.png'
import dotLogo from '../img/polkadot.png'
import maticLogo from '../img/polygon.png'
import xrpLogo from '../img/ripple.png'
import dogeLogo from '../img/dogecoin.png'
import sandLogo from '../img/sandbox.png'

import { Container, Row, Col, Card, Table } from "react-bootstrap";
import MyDoughnutChart from "./MyDoughnutChart";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { getWalletUtenteCorrente } from '../redux/actions'

const MyWallet = () => {

    const dispatch = useDispatch();

    const utenteCorrente = useSelector(state => state.utenteCorrente.userData);

    const walletCorrente = useSelector(state => state.walletCorrente.wallet);

    const timeoutRef = useRef(null);

    const [saldoDisponibile,setSaldoDisponibile] = useState();
    const [listaAsset,setListaAsset] = useState();
    const [listaOperazioni,setListaOperazioni] = useState();

    useEffect(() => {
        const fetchData = () => {
        dispatch(getWalletUtenteCorrente(utenteCorrente.jwtToken));
        }

        const updateWalletData = () => {
            setSaldoDisponibile(walletCorrente.saldoDisponibile);
            setListaAsset(walletCorrente.listaAsset);
            setListaOperazioni(walletCorrente.listaOperazioni);
          };

        fetchData();
        updateWalletData();

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
        startTimer(); 
        return () => {
            resetTimer();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [utenteCorrente,walletCorrente,walletCorrente.saldoDisponibile, walletCorrente.listaAsset, walletCorrente.listaOperazioni]);

    console.log(walletCorrente);
    console.log(saldoDisponibile);
    console.log(listaAsset);
    console.log(listaOperazioni);

    const chartData = {
        labels: ['BTC', 'ETH', 'ADA', 'DOT', 'MATIC', 'XRP', 'DOGE', 'SAND'],
        values: [25, 25, 10, 10, 10, 10, 5, 5],
    };

    return (
        <>
            <Container fluid className="text-light px-5" style={{ background: "#1E1E1E" }}>
                <Row className="py-5">
                    <h2>Asset</h2>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <MyDoughnutChart chartData={chartData} />
                    </Col>
                    <Col md={6}>
                        <Card className="my-4" style={{ background: "#2d2d2d" }}>
                            <Card.Body>
                                <Table className='text-light m-0'>
                                    <tbody className="d-flex flex-column">
                                        <tr className="d-flex flex-row justify-content-between align-items-center my-2">
                                            <td className="d-flex align-items-center p-0">
                                                <img src={btcLogo} alt="Bitcoin Logo" width={40} className="img-fluid object-fit-cover" />
                                                <span className="ms-2">BTC</span>
                                            </td>
                                            <td>$ 1935.69</td>
                                        </tr>
                                        <tr className="d-flex flex-row justify-content-between align-items-center my-2">
                                            <td className="d-flex align-items-center p-0">
                                                <img src={ethLogo} alt="Ethereum Logo" width={40} className="img-fluid object-fit-cover" />
                                                <span className="ms-2">ETH</span>
                                            </td>
                                            <td>$ 1935.69</td>
                                        </tr>
                                        <tr className="d-flex flex-row justify-content-between align-items-center my-2">
                                            <td className="d-flex align-items-center p-0">
                                                <img src={adaLogo} alt="Cardano Logo" width={40} />
                                                <span className="ms-2">ADA</span>
                                            </td>
                                            <td>$ 0.2819</td>
                                        </tr>
                                        <tr className="d-flex flex-row justify-content-between align-items-center my-2">
                                            <td className="d-flex align-items-center p-0">
                                                <img src={dotLogo} alt="Polkadot Logo" width={40} />
                                                <span className="ms-2">DOT</span>
                                            </td>
                                            <td>$ 5.29</td>
                                        </tr>
                                        <tr className="d-flex flex-row justify-content-between align-items-center my-2">
                                            <td className="d-flex align-items-center p-0">
                                                <img src={maticLogo} alt="Polygon Logo" width={40} />
                                                <span className="ms-2">MATIC</span>
                                            </td>
                                            <td>$ 0.6699</td>
                                        </tr>
                                        <tr className="d-flex flex-row justify-content-between align-items-center my-2">
                                            <td className="d-flex align-items-center p-0">
                                                <img src={xrpLogo} alt="Ripple Logo" width={40} />
                                                <span className="ms-2">XRP</span>
                                            </td>
                                            <td>$ 0.6699</td>
                                        </tr>
                                        <tr className="d-flex flex-row justify-content-between align-items-center my-2">
                                            <td className="d-flex align-items-center p-0">
                                                <img src={dogeLogo} alt="Dogecoin Logo" width={40} />
                                                <span className="ms-2">DOGE</span>
                                            </td>
                                            <td>$ 0.6699</td>
                                        </tr>
                                        <tr className="d-flex flex-row justify-content-between align-items-center my-2">
                                            <td className="d-flex align-items-center p-0">
                                                <img src={sandLogo} alt="The Sandbox Logo" width={40} />
                                                <span className="ms-2">SAND</span>
                                            </td>
                                            <td>$ 0.6699</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
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
                                        <tr>
                                            <td>05/07/2023 12:10</td>
                                            <td>BUY</td>
                                            <td>BTC</td>
                                            <td>1</td>
                                            <td>$ 30500.0</td>
                                            <td>$ 32500.0</td>
                                        </tr>
                                        <tr>
                                            <td>05/07/2023 12:10</td>
                                            <td>BUY</td>
                                            <td>BTC</td>
                                            <td>1</td>
                                            <td>$ 30500.0</td>
                                            <td>$ 32500.0</td>
                                        </tr>
                                        <tr>
                                            <td>05/07/2023 12:10</td>
                                            <td>BUY</td>
                                            <td>BTC</td>
                                            <td>1</td>
                                            <td>$ 30500.0</td>
                                            <td>$ 32500.0</td>
                                        </tr>
                                        <tr>
                                            <td>05/07/2023 12:10</td>
                                            <td>BUY</td>
                                            <td>BTC</td>
                                            <td>1</td>
                                            <td>$ 30500.0</td>
                                            <td>$ 32500.0</td>
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
export default MyWallet;
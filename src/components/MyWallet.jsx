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
import MyListaOperazioni from './MyListaOperazioni'

const MyWallet = () => {

    const dispatch = useDispatch();

    const utenteCorrente = useSelector(state => state.utenteCorrente.userData);

    const walletCorrente = useSelector(state => state.walletCorrente.wallet);

    const timeoutRef = useRef(null);

    useEffect(() => {
        const fetchData = () => {
            dispatch(getWalletUtenteCorrente(utenteCorrente.jwtToken));
        }
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [utenteCorrente]);

    console.log(walletCorrente);
    console.log(walletCorrente.saldoDisponibile);
    console.log(walletCorrente.listaAsset);
    console.log(walletCorrente.listaOperazioni);

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
                        <MyListaOperazioni lista={walletCorrente.listaOperazioni} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default MyWallet;
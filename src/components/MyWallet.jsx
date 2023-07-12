import btcLogo from '../img/bitcoin.png'
import ethLogo from '../img/ethereum.png'
import adaLogo from '../img/cardano.png'
import dotLogo from '../img/polkadot.png'
import maticLogo from '../img/polygon.png'
import xrpLogo from '../img/ripple.png'
import dogeLogo from '../img/dogecoin.png'
import sandLogo from '../img/sandbox.png'
import usdtLogo from '../img/usdt.png'

import { Container, Row, Col, Card, Table } from "react-bootstrap";
import MyDoughnutChart from "./MyDoughnutChart";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { getWalletUtenteCorrente } from '../redux/actions'
import MyListaOperazioni from './MyListaOperazioni'

const MyWallet = () => {

    const cryptoLogos = {
        btc: btcLogo,
        eth: ethLogo,
        ada: adaLogo,
        dot: dotLogo,
        matic: maticLogo,
        xrp: xrpLogo,
        doge: dogeLogo,
        sand: sandLogo,
        usdt:usdtLogo
    };

    const dispatch = useDispatch();

    const utenteCorrente = useSelector(state => state.utenteCorrente.userData);

    const walletCorrente = useSelector(state => state.walletCorrente.wallet);

    const timeoutRef = useRef(null);

    useEffect(() => {
        const fetchData = () => {
            if (utenteCorrente && utenteCorrente.jwtToken) {
                dispatch(getWalletUtenteCorrente(utenteCorrente.jwtToken));
            }
        }
        fetchData();
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
    }, [utenteCorrente]);

    const cryptoValues = walletCorrente.listaAsset.map(asset => asset.crypto.prezzo * asset.quantita);
    const totaleParzialeSaldo = cryptoValues.reduce((a, b) => a + b, 0) + walletCorrente.saldoDisponibile;
    const percentualeAsset = cryptoValues.map(value => (value / totaleParzialeSaldo) * 100);
    percentualeAsset.push((walletCorrente.saldoDisponibile / totaleParzialeSaldo) * 100);

    const chartData = {
        labels: [...walletCorrente.listaAsset.map(asset => asset.crypto.simbolo), 'USDT'],
        values: [...percentualeAsset]
    };

    const oggettoSaldo = {
        crypto:{
            simbolo:"USDT",
            prezzo: 1.00
        },
        quantita: walletCorrente.saldoDisponibile
    }

    if(walletCorrente && walletCorrente.listaAsset){
        
    }
    const updatedListaAsset = [...walletCorrente.listaAsset,oggettoSaldo];

    console.log(updatedListaAsset);

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
                                        {updatedListaAsset && updatedListaAsset.map(asset => (
                                            <tr key={asset.crypto.simbolo} className="d-flex flex-row justify-content-between align-items-center my-2">
                                                <td className="d-flex align-items-center p-0">
                                                    <img src={cryptoLogos[asset.crypto.simbolo.toLowerCase()]} alt={`${crypto.nome} Logo`} width={40} className="img-fluid object-fit-cover" />
                                                    <span className="ms-2">{asset.crypto.simbolo}</span>
                                                </td>
                                                <td className="d-flex flex-column">
                                                    {asset.quantita}
                                                    <p className="text-muted">{(asset.crypto.prezzo * asset.quantita).toFixed(2)}</p>
                                                </td>
                                            </tr>
                                        ))}
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
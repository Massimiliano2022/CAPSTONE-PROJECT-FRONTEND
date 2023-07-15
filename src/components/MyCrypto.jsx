import btcLogo from '../img/bitcoin.png'
import ethLogo from '../img/ethereum.png'
import adaLogo from '../img/cardano.png'
import dotLogo from '../img/polkadot.png'
import maticLogo from '../img/polygon.png'
import xrpLogo from '../img/ripple.png'
import dogeLogo from '../img/dogecoin.png'
import sandLogo from '../img/sandbox.png'

import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSelectedCrypto, removeSelectedCryptoError, selectedCryptoSuccessReset } from '../redux/actions'

import MyLineChart from './MyLineChart';
import MyOperazione from './MyOperazione'
import MyCryptoPriceHistory from './MyCryptoPriceHistory'
import MyTrendCrypto from './MyTrendCrypto'

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

    const cryptoSymbol = simbolo.toUpperCase();

    const selectedCrypto = useSelector(state => state.selectedCryptoData.selectedCrypto);
    const error = useSelector(state => state.selectedCryptoData.error);
    const loading = useSelector(state => state.selectedCryptoData.isLoading);
    const success = useSelector(state => state.selectedCryptoData.success);

    const timeoutRef = useRef(null);

    useEffect(() => {
        dispatch(removeSelectedCryptoError());
        dispatch(selectedCryptoSuccessReset());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const fetchData = () => {
            dispatch(getSelectedCrypto(cryptoSymbol));
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, cryptoSymbol]);

    const variazioneColor = selectedCrypto.percententuale_variazione_1h < 0 ? "#E31903" : "#0FC67E";

    return (
        <>
            <Container fluid className="text-light px-5" style={{ background: "#1E1E1E" }}>
                {error || loading || !success ? (
                    <>
                        <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
                            <Spinner animation="grow" variant="warning" className="me-2" />
                        </div>
                    </>
                ) : (
                    <>
                        <Row className="pt-5">
                            <Col sm={12}>
                                <div className="d-flex align-items-center mb-4">
                                    <img src={cryptoLogos[simbolo]} alt={cryptoLogos[simbolo]} width={40} className="me-4" />
                                    <h2 className="me-4">Valore {selectedCrypto.nome}</h2>
                                    <p className="text-muted mb-0">{cryptoSymbol}</p>
                                </div>
                                <p className="fs-3">{selectedCrypto.prezzo ? selectedCrypto.prezzo.toFixed(4) : ''}<span style={{ color: variazioneColor }}>{selectedCrypto.percententuale_variazione_1h}</span></p>
                            </Col>
                        </Row>
                        <Row className="pb-5">
                            <Col sm={12} md={8}>
                                <Card className="mb-4" style={{ background: "#2d2d2d" }}>
                                    <Card.Body>
                                        <MyLineChart simbolo={cryptoSymbol} selectedCrypto={selectedCrypto} />
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={12} md={4}>
                                <MyOperazione logo={cryptoLogos[simbolo]} selectedCrypto={selectedCrypto} />
                            </Col>
                        </Row>
                        <Row className="pb-5">
                            <Col sm={12} md={8}>
                                <MyCryptoPriceHistory simbolo={cryptoSymbol} selectedCrypto={selectedCrypto} />
                            </Col>
                            <Col md={4} className="d-none d-sm-none d-md-block">
                                <MyTrendCrypto selectedCrypto={selectedCrypto} />
                            </Col>
                        </Row>
                    </>
                )}
            </Container>
        </>
    );
}
export default MyCrypto;
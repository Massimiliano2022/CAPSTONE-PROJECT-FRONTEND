
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useEffect, useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getWalletUtenteCorrente } from '../redux/actions'

import MyProtectedRoute from "./MyProtectedRoute";

import MyDoughnutChart from "./MyDoughnutChart";
import MyAssetTable from './MyAssetTable'
import MyListaOperazioni from './MyListaOperazioni'

const MyWallet = () => {

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

    return (
        <>
            <Container fluid className="text-light px-5" style={{ background: "#1E1E1E" }}>
                {!walletCorrente ? (
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <Spinner animation="grow" variant="warning" />
                    </div>
                ) : (
                    <>
                        <Row className="py-5">
                            <h2>Asset</h2>
                            <Col md={6} className="d-flex justify-content-center align-items-center">
                                <MyDoughnutChart walletCorrente={walletCorrente} />
                            </Col>
                            <Col md={6}>
                                <MyAssetTable walletCorrente={walletCorrente} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <MyListaOperazioni utenteCorrente={utenteCorrente} />
                            </Col>
                        </Row>
                    </>
                )}
            </Container >
        </>
    );
}
export default MyProtectedRoute(MyWallet);
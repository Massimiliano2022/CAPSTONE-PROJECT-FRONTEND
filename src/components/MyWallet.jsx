
import { Container, Row, Col, Spinner } from "react-bootstrap";
import MyDoughnutChart from "./MyDoughnutChart";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { getWalletUtenteCorrente } from '../redux/actions'
import MyListaOperazioni from './MyListaOperazioni'
import MyAssetTable from './MyAssetTable'
import { Link } from "react-router-dom";

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

    return (
        <>
            <Container fluid className="text-light px-5" style={{ background: "#1E1E1E" }}>
                {!utenteCorrente ? (
                    <div className="d-flex justify-content-center align-items-center" style={{height:"60vh"}}>
                        <div className="alert alert-danger" role="alert">
                            Non hai effettuato l'accesso!
                            <Link to={"/login"}>Accedi per poter utilizzare le funzionalità richieste.</Link>
                        </div>
                    </div>
                ) : (
                    <>
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
                                        <MyListaOperazioni walletCorrente={walletCorrente} />
                                    </Col>
                                </Row>
                            </>
                        )}
                    </>
                )}
            </Container >
        </>
    );
}
export default MyWallet;
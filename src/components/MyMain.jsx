import mainImg from '../img/main.svg'

import { BiLogIn } from "react-icons/bi";
import { BsFillPersonFill, BsCurrencyExchange, BsWallet2 } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCurrentCryptoData, removeCurrentDataError } from '../redux/actions'
import MyCryptoCard from './MyCryptoCard'


const MyMain = () => {

    const navigator = useNavigate();

    const utenteCorrente = useSelector(state => state.utenteCorrente.userData);
    const cryptosPrice = useSelector(state => state.currentCryptoData.cryptoData);
    const error = useSelector(state => state.currentCryptoData.error);
    const loading = useSelector(state => state.currentCryptoData.isLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentCryptoData());
        if (cryptosPrice) {
            dispatch(removeCurrentDataError());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const effettuaOperazione = () => {
        const randomIndex = Math.floor(Math.random() * cryptosPrice.length);
        const selectedCrypto = cryptosPrice[randomIndex];
        navigator(`/crypto/${selectedCrypto.simbolo.toLowerCase()}`);
    }

    return (
        <>
            <Container fluid className="text-light px-5" style={{ background: "#1E1E1E" }}>
                <Row className={`d-flex align-items-center py-5 ${utenteCorrente && utenteCorrente.jwtToken ? 'd-none' : ''}`}>
                    <Col md={6} className="d-flex flex-column">
                        <h1>Compra e scambia Crypto su DigitFin</h1>
                        <Link
                            to={"/signup"}
                            style={{ color: "black" }}
                            className="btn btn-warning nav-link text-center rounded rounded-1 p-2 w-50 mt-4"
                        >
                            <span className='fs-4 pe-2'>
                                <BsFillPersonFill />
                            </span>
                            <span>
                                Iscriviti
                            </span>
                        </Link>
                        <Link
                            to={"/login"}
                            className="btn btn-dark nav-link text-center rounded rounded-1 p-2 w-50 mt-4"
                        >
                            <span className='fs-4 pe-2'>
                                <BiLogIn />
                            </span>
                            Accedi
                        </Link>
                    </Col>
                    <Col md={6} className="d-flex justify-content-end">
                        <img className="object-fit-cover img-fluid main-img" src={mainImg} alt='exchange' />
                    </Col>
                </Row>
                <Row className={`d-flex align-items-center py-5 ${utenteCorrente && utenteCorrente.jwtToken ? '' : 'd-none'}`}>
                    <Col sm={6} className="d-flex flex-column">
                        <h1>Compra e scambia Crypto su DigitFin</h1>
                        <Button
                            onClick={effettuaOperazione}
                            style={{ color: "black" }}
                            className="btn btn-warning nav-link text-center rounded rounded-1 p-2 w-50 mt-4"
                        >
                            <span className='fs-4 pe-2'>
                                <BsCurrencyExchange />
                            </span>
                            Compra
                        </Button>
                        <Link
                            to={"/wallet"}
                            className="btn btn-dark nav-link text-center rounded rounded-1 p-2 w-50 mt-4"
                        >
                            <span className='fs-4 pe-2'>
                                <BsWallet2 />
                            </span>
                            Wallet
                        </Link>
                    </Col>
                    <Col sm={6} className="d-flex justify-content-end">
                        <img className="object-fit-cover img-fluid main-img" src={mainImg} alt='exchange' />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="text-light px-5" style={{ background: "#1E1E1E" }}>
                <Row className='py-5'>
                    {loading || error ? (
                        <>
                            <div className='d-flex justify-content-center align-items-center' style={{ height: "50vh" }}>
                                <Spinner animation="grow" variant="warning" className="me-2" />
                            </div>
                        </>
                    ) : (
                        <>
                            {cryptosPrice.slice(0, 4).map(crypto => (
                                <MyCryptoCard crypto={crypto} key={crypto.id} />
                            ))}
                        </>
                    )}
                </Row>
            </Container>
        </>
    );
}
export default MyMain;
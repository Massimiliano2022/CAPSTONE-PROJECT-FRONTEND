import mainImg from '../img/main.svg'

import { BiLogIn } from "react-icons/bi";
import { BsFillPersonFill, BsCurrencyExchange, BsWallet2 } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { getCurrentCryptoData } from '../redux/actions'
import MyMainTablePrice from './MyMainTablePrice';
import MyMainCryptoCard from './MyMainCryptoCard';

const MyMain = () => {

    const navigator = useNavigate();

    const dispatch = useDispatch();

    const utenteCorrente = useSelector(state => state.utenteCorrente.userData);
    const cryptosPrice = useSelector(state => state.currentCryptoData.cryptoData);

    const timeoutRef = useRef(null);

    useEffect(() => {
        const fetchData = () => {
            dispatch(getCurrentCryptoData('http://localhost:3001/crypto'));
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
    }, []);

    const effettuaOperazione = () => {
        const randomIndex = Math.floor(Math.random() * cryptosPrice.length);
        const selectedCrypto = cryptosPrice[randomIndex];
        navigator(`/crypto/${selectedCrypto.simbolo.toLowerCase()}`);
    }

    return (
        <>  
            {/*INIZIO MOBILE*/}
            <Container fluid className="text-light px-5 main-div-mobile d-flex justify-content-center align-items-center d-md-none">
                <Row className={`d-flex flex-column ${utenteCorrente && utenteCorrente.jwtToken ? 'd-none' : ''}`}>
                    <Col md={12}>
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
                    <Col md={12}>
                        <img className="object-fit-cover img-fluid main-img" src={mainImg} alt='exchange' />
                    </Col>
                </Row>
                <Row className={`d-flex flex-column ${utenteCorrente && utenteCorrente.jwtToken ? '' : 'd-none'}`}>
                    <Col md={12}>
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
                    <Col md={12}>
                        <img className="object-fit-cover img-fluid main-img" src={mainImg} alt='exchange' />
                    </Col>
                </Row>
            </Container>
            {/*FINE MOBILE*/}
            {/*INIZIO TABLET*/}
            <Container fluid className="text-light px-5 main-div-tablet d-flex justify-content-center align-items-center d-none d-md-flex">
                <Row className={` ${utenteCorrente && utenteCorrente.jwtToken ? 'd-none' : ''}`}>
                    <Col md={12}>
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
                    <Col md={12} className='d-flex justify-content-end'>
                        <img className="object-fit-cover img-fluid main-img" src={mainImg} alt='exchange' />
                    </Col>
                </Row>
                <Row className={`${utenteCorrente && utenteCorrente.jwtToken ? '' : 'd-none'}`}>
                    <Col md={12}>
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
                    <Col md={12} className='d-flex justify-content-end'>
                        <img className="object-fit-cover img-fluid main-img" src={mainImg} alt='exchange' />
                    </Col>
                </Row>
            </Container>
            <Container fluid className='text-light px-5 vh-50 d-none d-md-block' style={{ background: "#1E1E1E" }}>
                <Row className=''>
                    {!cryptosPrice || cryptosPrice.length === 0 ? (
                        <>
                            <div className='d-flex justify-content-center align-items-center' style={{ height: "50vh" }}>
                                <Spinner animation="grow" variant="warning" className="me-2" />
                            </div>
                        </>
                    ) : (
                        <>
                            <MyMainTablePrice cryptosPrice={cryptosPrice} />
                        </>
                    )}
                </Row>
            </Container>
            {/*FINE TABLET*/}
        </>
    );
}
export default MyMain;
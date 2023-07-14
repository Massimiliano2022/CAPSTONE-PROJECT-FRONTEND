import mainImg from '../img/main.svg'

import { BiLogIn } from "react-icons/bi";
import { BsFillPersonFill, BsCurrencyExchange,BsWallet2} from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCurrentCryptoData } from '../redux/actions'
import MyCryptoCard from './MyCryptoCard'


const MyMain = () => {

    const navigator = useNavigate();

    const utenteCorrente = useSelector(state => state.utenteCorrente.userData);

    const cryptosPrice = useSelector(state => state.currentCryptoData.cryptoData);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentCryptoData());
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
                    <Col sm={6} className="d-flex flex-column">
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
                    <Col sm={6} className="d-flex justify-content-end">
                        <img className="object-fit-cover img-fluid main-img" src={mainImg} alt='exchange'/>
                    </Col>
                </Row>
                <Row className={`d-flex py-5 ${utenteCorrente && utenteCorrente.jwtToken ? '' : 'd-none'}`}>
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
                        <img className="object-fit-cover img-fluid" src={mainImg} alt='exchange' style={{ maxHeight: "325px" }}/>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="text-light px-5" style={{ background: "#1E1E1E" }}>
                <Row className='py-5'>
                    <>
                        {cryptosPrice.slice(0, 4).map(crypto => (
                            <MyCryptoCard crypto={crypto} key={crypto.id} />
                        ))}
                    </>
                </Row>
            </Container>
        </>
    );
}
export default MyMain;
import mainImg from '../img/main.svg'
import btcLogo from '../img/bitcoin.svg'
import ethLogo from '../img/ethereum.svg'
import { BiLogIn } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from "react-bootstrap";


const MyMain = () => {
    return (
        <>
            <Container fluid className="text-light px-5" style={{background:"#1E1E1E"}}>
                <Row className="d-flex py-5">
                    <Col sm={6} className="d-flex flex-column">
                        <h1>Compra e scambia Crypto su DigitFin</h1>
                        <Link
                             style={{background:"#EBB60B"}}
                             to={"/"}
                            className="nav-link text-dark text-center rounded rounded-1 p-2 w-50 mt-4"
                        >
                            <span className='fs-4 pe-2'>
                                <BsFillPersonFill />
                            </span>
                            <span>
                                Iscriviti
                            </span>
                        </Link>
                        <Link
                            style={{ background: "#454545" }}
                            to={"/"}
                            className="nav-link text-light text-center rounded rounded-1 p-2 w-50 mt-4"
                        >
                            <span className='fs-4 pe-2'>
                                <BiLogIn/>
                            </span>
                            Accedi
                        </Link>
                    </Col>
                    <Col sm={6} className="d-flex justify-content-end">
                        <img className="object-fit-cover img-fluid" src={mainImg} alt='exchange' style={{ maxHeight: "250px" }} />
                    </Col>
                </Row>
                </Container>
                <Container fluid className="text-light px-5" style={{background:"#1E1E1E"}}>
                <Row className='py-5'>
                    <Col md={6}>
                        <Card style={{ background: "#2d2d2d" }}>
                            <Card.Body>
                                <img src={btcLogo} alt='Bitcoin Logo' width={50} />
                                <div className='d-flex justify-content-center py-4'>
                                    <Col sm={4}>
                                        <Card.Text>BTC/USDT</Card.Text>
                                    </Col>
                                    <Col sm={4}>
                                        <Card.Text>30518.49</Card.Text>
                                    </Col>
                                    <Col sm={4}>
                                        <Card.Text style={{color:"#0FC67E"}}>+0.21</Card.Text>
                                    </Col>
                                </div>
                                <Button
                                    type="button"
                                    variant="success"
                                    className="text-light rounded rounded-1 me-3"
                                >
                                    Compra
                                </Button>
                                <Button
                                    type="button"
                                    variant="danger"
                                    className="text-light rounded rounded-1"
                                >
                                    Vendi
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card style={{ background: "#2d2d2d" }}>
                            <Card.Body>
                                <img src={ethLogo} alt='Bitcoin Logo' width={50} />
                                <div className='d-flex justify-content-center py-4'>
                                    <Col sm={4}>
                                        <Card.Text>ETH/USDT</Card.Text>
                                    </Col>
                                    <Col sm={4}>
                                        <Card.Text>1935.69</Card.Text>
                                    </Col>
                                    <Col sm={4}>
                                        <Card.Text style={{color:"#0FC67E"}}>+4.5</Card.Text>
                                    </Col>
                                </div>
                                <Button
                                    type="button"
                                    variant="success"
                                    className="text-light rounded rounded-1 me-3"
                                >
                                    Compra
                                </Button>
                                <Button
                                    type="button"
                                    variant="danger"
                                    className="text-light rounded rounded-1"
                                >
                                    Vendi
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default MyMain;
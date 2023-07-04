import btcLogo from '../img/bitcoin.png'
import ethLogo from '../img/ethereum.png'
import adaLogo from '../img/cardano.png'
import dotLogo from '../img/polkadot.png'
import maticLogo from '../img/polygon.png'
import xrpLogo from '../img/ripple.png'
import dogeLogo from '../img/dogecoin.png'
import sandLogo from '../img/sandbox.png'


import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyCryptoList = () => {
    return (
        <>
            <Container fluid className="text-light px-5" style={{ background: "#1E1E1E" }}>
                <Row className='py-5'>
                    <Col sm={12} md={6}>
                        <h1 className="fs-3 p-0 m-0">Panoramica mercati</h1>
                        <p className="text-muted mb-3">Tutte le informazione dei prezzi sono in USD</p>
                    </Col>
                    <Col sm={12} md={6}>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </Form>
                    </Col>
                    <Col md={6}>
                        <Link to={"/crypto"} className="nav-link">
                            <Card className="mb-4" style={{ background: "#2d2d2d" }}>
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
                                            <Card.Text style={{ color: "#0FC67E" }}>+0.21</Card.Text>
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
                        </Link>
                    </Col>
                    <Col md={6}>
                        <Link to={"/crypto"} className="nav-link">
                            <Card className="mb-4" style={{ background: "#2d2d2d" }}>
                                <Card.Body>
                                    <img src={ethLogo} alt='Ethereum Logo' width={50} />
                                    <div className='d-flex justify-content-center py-4'>
                                        <Col sm={4}>
                                            <Card.Text>ETH/USDT</Card.Text>
                                        </Col>
                                        <Col sm={4}>
                                            <Card.Text>1935.69</Card.Text>
                                        </Col>
                                        <Col sm={4}>
                                            <Card.Text style={{ color: "#0FC67E" }}>+4.5</Card.Text>
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
                        </Link>
                    </Col>
                    <Col md={6}>
                        <Link to={"/crypto"} className="nav-link">
                            <Card className="mb-4" style={{ background: "#2d2d2d" }}>
                                <Card.Body>
                                    <img src={adaLogo} alt='Cardano Logo' width={50} />
                                    <div className='d-flex justify-content-center py-4'>
                                        <Col sm={4}>
                                            <Card.Text>ADA/USDT</Card.Text>
                                        </Col>
                                        <Col sm={4}>
                                            <Card.Text>0.2819</Card.Text>
                                        </Col>
                                        <Col sm={4}>
                                            <Card.Text style={{ color: "#0FC67E" }}>+3.21</Card.Text>
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
                        </Link>
                    </Col>
                    <Col md={6}>
                        <Link to={"/crypto"} className="nav-link">
                            <Card className="mb-4" style={{ background: "#2d2d2d" }}>
                                <Card.Body>
                                    <img src={dotLogo} alt='Polkadot Logo' width={50} />
                                    <div className='d-flex justify-content-center py-4'>
                                        <Col sm={4}>
                                            <Card.Text>DOT/USDT</Card.Text>
                                        </Col>
                                        <Col sm={4}>
                                            <Card.Text>5.29</Card.Text>
                                        </Col>
                                        <Col sm={4}>
                                            <Card.Text style={{ color: "#0FC67E" }}>+2.5</Card.Text>
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
                        </Link>
                    </Col>
                    <Col md={6}>
                        <Link to={"/crypto"} className="nav-link">
                            <Card className="mb-4" style={{ background: "#2d2d2d" }}>
                                <Card.Body>
                                    <img src={maticLogo} alt='Polygon Logo' width={50} />
                                    <div className='d-flex justify-content-center py-4'>
                                        <Col sm={4}>
                                            <Card.Text>MATIC/USDT</Card.Text>
                                        </Col>
                                        <Col sm={4}>
                                            <Card.Text>0.6699</Card.Text>
                                        </Col>
                                        <Col sm={4}>
                                            <Card.Text style={{ color: "#0FC67E" }}>+1.29</Card.Text>
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
                        </Link>
                    </Col>
                    <Col md={6}>
                        <Link to={"/crypto"} className="nav-link">
                            <Card className="mb-4" style={{ background: "#2d2d2d" }}>
                                <Card.Body>
                                    <img src={xrpLogo} alt='Ripple Logo' width={50} />
                                    <div className='d-flex justify-content-center py-4'>
                                        <Col sm={4}>
                                            <Card.Text>XRP/USDT</Card.Text>
                                        </Col>
                                        <Col sm={4}>
                                            <Card.Text>0.47223</Card.Text>
                                        </Col>
                                        <Col sm={4}>
                                            <Card.Text style={{ color: "#BB2D3B" }}>-0.19</Card.Text>
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
                        </Link>
                    </Col>
                    <Col md={6}>
                        <Link to={"/crypto"} className="nav-link">
                            <Card className="mb-4" style={{ background: "#2d2d2d" }}>
                                <Card.Body>
                                    <img src={dogeLogo} alt='Dogecoin Logo' width={50} />
                                    <div className='d-flex justify-content-center py-4'>
                                        <Col sm={4}>
                                            <Card.Text>DOGE/USDT</Card.Text>
                                        </Col>
                                        <Col sm={4}>
                                            <Card.Text>0.06844</Card.Text>
                                        </Col>
                                        <Col sm={4}>
                                            <Card.Text style={{ color: "#0FC67E" }}>+2.99</Card.Text>
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
                        </Link>
                    </Col>
                    <Col md={6}>
                        <Link to={"/crypto"} className="nav-link">
                            <Card className="mb-4" style={{ background: "#2d2d2d" }}>
                                <Card.Body>
                                    <img src={sandLogo} alt='The Sandbox Logo' width={50} />
                                    <div className='d-flex justify-content-center py-4'>
                                        <Col sm={4}>
                                            <Card.Text>SAND/USDT</Card.Text>
                                        </Col>
                                        <Col sm={4}>
                                            <Card.Text>0.44715021</Card.Text>
                                        </Col>
                                        <Col sm={4}>
                                            <Card.Text style={{ color: "#0FC67E" }}>+6.55</Card.Text>
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
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default MyCryptoList;
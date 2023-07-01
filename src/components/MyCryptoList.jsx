import btcLogo from '../img/bitcoin.png'
import ethLogo from '../img/ethereum.png'
import adaLogo from '../img/cardano.png'
import dotLogo from '../img/polkadot.png'
import maticLogo from '../img/polygon.png'
import xrpLogo from '../img/ripple.png'


import { Button, Card, Col, Container, Row } from "react-bootstrap";

const MyCryptoList = () => {
    return (
        <>
            <Container fluid className="text-light px-5" style={{ background: "#1E1E1E" }}>
                <Row className='py-5'>
                    <h1 className="text-center mb-3">Lista crypto</h1>
                    <Col md={6}>
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
                    </Col>
                    <Col md={6}>
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
                    </Col>
                    <Col md={6}>
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
                    </Col>
                    <Col md={6}>
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
                    </Col>
                    <Col md={6}>
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
                    </Col>
                    <Col md={6}>
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
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default MyCryptoList;
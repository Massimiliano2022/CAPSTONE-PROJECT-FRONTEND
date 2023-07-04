import btcLogo from '../img/bitcoin.png'
import ethLogo from '../img/ethereum.png'
import adaLogo from '../img/cardano.png'
import dotLogo from '../img/polkadot.png'
import maticLogo from '../img/polygon.png'

import { Button, Card, Col, Container, Form, Row, Table } from "react-bootstrap";
import MyLineChart from './MyLineChart';
import { useState } from 'react';

const MyCrypto = () => {

    const chartData = {
        labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno'],
        values: [23125.1, 23130.5, 28473.7, 29252.1, 27216.1, 30472.9],
    };

    const [showCompra, setShowCompra] = useState(true);

    const handleCompraClick = () => {
        setShowCompra(true);
    };

    const handleVendiClick = () => {
        setShowCompra(false);
    };

    return (
        <>
            <Container fluid className="text-light px-5" style={{ background: "#1E1E1E" }}>
                <Row className="pt-5">
                    <Col sm={12}>
                        <div className="d-flex align-items-center mb-4">
                            <img src={btcLogo} alt="Bitcoin Logo" width={50} className="me-4" />
                            <h1 className="me-4">Valore Bitcoin</h1>
                            <p className="text-muted mb-0">BTC</p>
                        </div>
                        <p className="fs-3">$ 30518.49 <span style={{ color: "#0FC67E" }}>+0.21</span></p>
                    </Col>
                </Row>
                <Row className="pb-5">
                    <Col sm={12} md={8}>
                        <Card className="mb-4" style={{ background: "#2d2d2d" }}>
                            <Card.Body>
                                <MyLineChart chartData={chartData} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="d-flex justify-content-between pb-3">
                            <Button
                                variant="link"
                                className="nav-link text-light p-2"
                                style={{
                                    borderRadius: "0",
                                    borderBottom: showCompra ? '3px solid #EBB60B' : 'none',
                                }}
                                onClick={handleCompraClick}
                            >Compra Btc</Button>
                            <Button
                                variant="link"
                                className="nav-link text-light p-2"
                                style={{
                                    borderRadius: "0",
                                    borderBottom: showCompra ? 'none' : '3px solid #EBB60B',
                                }}
                                onClick={handleVendiClick}
                            >Vendi Btc</Button>
                        </div>
                        {showCompra ? (
                            <Card className="mb-4" style={{ background: "#2d2d2d" }}>
                                <Card.Body>
                                    <Card.Title>Compra</Card.Title>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <Form>
                                            <Form.Group controlId="quantita">
                                                <Form.Control type="number" defaultValue={1} />
                                            </Form.Group>
                                        </Form>
                                        <div className="d-flex align-items-center p-2 rounded-4" style={{ background: "#1E1E1E" }}>
                                            <img src={btcLogo} alt='Bitcoin Logo' width={35} className="pe-2" />
                                            <Card.Text>BTC</Card.Text>
                                        </div>
                                    </div>
                                    <Button variant="button" className="w-100 p-1" style={{ background: "#EBB60B" }}>Compra</Button>
                                </Card.Body>
                            </Card>
                        ) : (
                            <Card className="mb-4" style={{ background: "#2d2d2d" }}>
                                <Card.Body>
                                    <Card.Title>Vendi</Card.Title>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <Form>
                                            <Form.Group controlId="quantita">
                                                <Form.Control type="number" defaultValue={1} />
                                            </Form.Group>
                                        </Form>
                                        <div className="d-flex align-items-center p-2 rounded-4" style={{ background: "#1E1E1E" }}>
                                            <img src={btcLogo} alt='Bitcoin Logo' width={35} className="pe-2" />
                                            <Card.Text>BTC</Card.Text>
                                        </div>
                                    </div>
                                    <Button variant="button" className="w-100 p-1" style={{ background: "#EBB60B" }}>Vendi</Button>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>
                <Row className="pb-5">
                    <Col sm={12} md={8}>
                        <Card style={{ background: "#2d2d2d" }}>
                            <Card.Body>
                                <Card.Title className="mb-3">Storico dei prezzi BTC/USD</Card.Title>
                                <Table className='text-light'>
                                    <thead style={{ background: "#0B0E11" }}>
                                        <tr>
                                            <th>Periodo</th>
                                            <th>Prezzo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Oggi</td>
                                            <td>$ 30518.4</td>
                                        </tr>
                                        <tr>
                                            <td>30 giorni</td>
                                            <td>$ 30472.9</td>
                                        </tr>
                                        <tr>
                                            <td>60 giorni</td>
                                            <td>$ 27216.1</td>
                                        </tr>
                                        <tr>
                                            <td>90 giorni</td>
                                            <td>$ 29252.1</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="d-none d-sm-none d-md-block">
                        <Card style={{ background: "#2d2d2d" }}>
                            <Card.Body>
                                <Card.Title className="mb-3">Crypto di tendenza</Card.Title>
                                <Table className='text-light'>
                                    <tbody className="d-flex flex-column">
                                        <tr className="d-flex flex-row justify-content-between align-items-center">
                                            <td className="d-flex align-items-center p-0">
                                                <img src={ethLogo} alt="Ethereum Logo" width={30} className="img-fluid object-fit-cover" />
                                                <span className="fs-6 ms-2">ETH</span>
                                            </td>
                                            <td className="fs-6">$ 1935.69</td>
                                        </tr>
                                        <tr className="d-flex flex-row justify-content-between align-items-center">
                                            <td className="d-flex align-items-center p-0">
                                                <img src={adaLogo} alt="Cardano Logo" width={30} />
                                                <span className="fs-6 ms-2">ADA</span>
                                            </td>
                                            <td className="fs-6">$ 0.2819</td>
                                        </tr>
                                        <tr className="d-flex flex-row justify-content-between align-items-center">
                                            <td className="d-flex align-items-center p-0">
                                                <img src={dotLogo} alt="Polkadot Logo" width={30} />
                                                <span className="fs-6 ms-2">DOT</span>
                                            </td>
                                            <td className="fs-6">$ 5.29</td>
                                        </tr>
                                        <tr className="d-flex flex-row justify-content-between align-items-center">
                                            <td className="d-flex align-items-center p-0">
                                                <img src={maticLogo} alt="Polygon Logo" width={30} />
                                                <span className="fs-6 ms-2">MATIC</span>
                                            </td>
                                            <td className="fs-6">$ 0.6699</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default MyCrypto;
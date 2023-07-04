import btcLogo from '../img/bitcoin.png'
import { Col, Container, Row } from "react-bootstrap";
import MyLineChart from './MyLineChart';

const MyCrypto = () => {

    const chartData = {
        labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio','Giugno'],
        values: [23125.1, 23130.5, 28473.7, 29252.1, 27216.1,30472.9],
      };

    return (
        <>
            <Container fluid className="text-light px-5" style={{ background: "#1E1E1E"}}>
                <Row className='py-5'>
                    <Col sm={12}>
                        <div className="d-flex align-items-center mb-4">
                            <img src={btcLogo} alt="Bitcoin Logo" width={50} className="me-4" />
                            <h1 className="me-4">Valore Bitcoin</h1>
                            <p className="text-muted mb-0">BTC</p>
                        </div>
                        <p className="fs-3">$ 30518.49 <span style={{ color: "#0FC67E" }}>+0.21</span></p>
                    </Col>
                    <Col sm={12} md={8}>
                        <MyLineChart chartData={chartData}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default MyCrypto;
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCurrentCryptoData } from '../redux/actions'
import MyCryptoCard from './MyCryptoCard'

const MyCryptoList = () => {

    const cryptosPrice = useSelector(state => state.currentCryptoData.cryptoData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCurrentCryptoData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Container fluid className="text-light px-5" style={{ background: "#1E1E1E" }}>
                <Row className='py-5'>
                    <Col>
                        <h2 className="fs-3 p-0 m-0">Panoramica mercati</h2>
                        <p className="text-muted m-0">Tutte le informazione dei prezzi sono in USD</p>
                    </Col>
                </Row>
                {/*<Col sm={12} md={6}>
                        <Form className="d-flex my-3">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </Form>
                    </Col>*/}
                <Row className="pb-5">
                    {!cryptosPrice ? (
                        <div className="d-flex justify-content-center align-items-center vh-100">
                            <Spinner animation="grow" variant="warning" />
                        </div>
                    ) : (
                        <>
                            {cryptosPrice.map(crypto => (
                                <MyCryptoCard crypto={crypto} key={crypto.id} />
                            ))}
                        </>
                    )}
                </Row>
            </Container>
        </>
    );
}
export default MyCryptoList;
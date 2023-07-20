import { Alert, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { getCurrentCryptoData } from '../redux/actions'
import MyCryptoCard from './MyCryptoCard'
import { useState } from "react";

const MyCryptoList = () => {

    const dispatch = useDispatch();

    const cryptosPrice = useSelector(state => state.currentCryptoData.cryptoData);

    const [query, setQuery] = useState("");
    const [noResults, setNoResults] = useState(false);
    const [loading, setLoading] = useState(true);

    const timeoutRef = useRef(null);

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            if (query) {
                dispatch(getCurrentCryptoData(`http://localhost:3001/crypto/search?query=${query}`))
                    .then(() => {
                        if (!cryptosPrice || cryptosPrice.length === 0) {
                            setNoResults(true);
                        } else {
                            setNoResults(false);
                        }
                        setLoading(false);
                    });
            } else {
                dispatch(getCurrentCryptoData('http://localhost:3001/crypto'))
                    .then(() => {
                        setLoading(false);
                    });
                setNoResults(false);
            }
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
    }, [query,noResults,loading]);

    return (
        <>
            <Container fluid className="text-light px-5" style={{ background: "#1E1E1E" }}>
                <Row className='pt-5'>
                    <Col>
                        <h2 className="fs-3 p-0 m-0">Panoramica mercati</h2>
                        <p className="text-muted m-0">Tutte le informazione dei prezzi sono in USD</p>
                    </Col>
                    <Col sm={12} md={6}>
                        <Form className="d-flex my-3">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                className="bg-dark text-white"
                                onChange={(event) => setQuery(event.target.value)}
                            />
                        </Form>
                    </Col>
                </Row>
                <Row className="pb-5" style={!loading && !noResults && cryptosPrice.length <= 2 ? { minHeight: "60vh" } : {}}>
                    {loading ? (
                        <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                            <Spinner animation="grow" variant="warning" className="me-2" />
                        </div>
                    ) : noResults ? (
                        <div className="" style={{ height: "50vh" }}>
                            <Alert className="w-100 text-center" variant="danger" role="alert">
                                Nessun risultato trovato.
                            </Alert>
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
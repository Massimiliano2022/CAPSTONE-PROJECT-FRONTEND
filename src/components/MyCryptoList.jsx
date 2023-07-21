import { Alert, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { getCurrentCryptoData } from '../redux/actions'
import MyCryptoCard from './MyCryptoCard'

const MyCryptoList = () => {

  const dispatch = useDispatch();

  const cryptosPrice = useSelector(state => state.currentCryptoData.cryptoData);

  const timeoutRef = useRef(null);

  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    const fetchData = () => {
      dispatch(getCurrentCryptoData());
      setLoading(false);
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

  useEffect(() => {
    if (query === '') {
      setSearchResults(cryptosPrice);
    } else {
      const filteredResults = cryptosPrice.filter((crypto) => {
        const nome = crypto.nome || '';
        const simbolo = crypto.simbolo || '';
        return (
          nome.toLowerCase().includes(query.toLowerCase()) ||
          simbolo.toLowerCase().includes(query.toLowerCase())
        );
      });
      setSearchResults(filteredResults);
    }
  }, [query, cryptosPrice]);

  return (
    <>
      <Container fluid className="text-light px-5 my-5" style={{minHeight:"100vh"}}>
        <Row>
          <Col className="position-sticky top-0" style={{ zIndex: 999 }}>
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
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </Form>
          </Col>
        </Row>
        <Row className="">
          {loading ? (
            <>
              <div className='d-flex justify-content-center align-items-center'>
                <Spinner animation="grow" variant="warning" className="me-2" />
              </div>
            </>
          ) : searchResults.length === 0 ? (
            <div className="">
              <Alert className="w-100 text-center" variant="danger" role="alert">
                Nessun risultato trovato.
              </Alert>
            </div>
          ) : (
            <>
              {searchResults.map(crypto => (
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

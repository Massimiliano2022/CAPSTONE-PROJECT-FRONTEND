import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyOperazione = ({logo,selectedCrypto}) => {

    const navigator = useNavigate();

    const utenteCorrente = useSelector(state => state.utenteCorrente.userData);

    const [showCompra, setShowCompra] = useState(true);

    const handleCompraClick = () => {
        setShowCompra(true);
    };

    const handleVendiClick = () => {
        setShowCompra(false);
    };

    const apriOperazione = () => {
        if(utenteCorrente){
            console.log(utenteCorrente);
        }else{
            navigator('/login');
        }
    };

    const chiudiOperazione = () => {
        if(utenteCorrente){
            console.log(utenteCorrente);
        }else{
            navigator('/login');
        }
    };

    return (
        <>
            <div className="d-flex justify-content-between pb-3">
                <Button
                    variant="link"
                    className="nav-link p-2"
                    style={{
                        borderRadius: "0",
                        borderBottom: showCompra ? '3px solid #EBB60B' : 'none',
                        color: showCompra ? "#EBB60B" : "inherit"
                    }}
                    onClick={handleCompraClick}
                >Compra {selectedCrypto.simbolo}</Button>
                <Button
                    variant="link"
                    className="nav-link p-2"
                    style={{
                        borderRadius: "0",
                        borderBottom: showCompra ? 'none' : '3px solid #EBB60B',
                        color: showCompra ? "inherit" : "#EBB60B"
                    }}
                    onClick={handleVendiClick}
                >Vendi {selectedCrypto.simbolo}</Button>
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
                                <img src={logo} alt={selectedCrypto.nome} width={35} className="pe-2" />
                                <Card.Text>{selectedCrypto.simbolo}</Card.Text>
                            </div>
                        </div>
                        <Card.Text className="text-muted">1 {selectedCrypto.simbolo} = {selectedCrypto.prezzo} $</Card.Text>
                        <Button 
                            variant="button" 
                            style={{ color: "black" }}
                            onClick={apriOperazione}
                            className="w-100 p-1 btn btn-warning" 
                            >Compra
                        </Button>
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
                                <img src={logo} alt={selectedCrypto.nome} width={35} className="pe-2" />
                                <Card.Text>{selectedCrypto.simbolo}</Card.Text>
                            </div>
                        </div>
                        <Card.Text className="text-muted">1 {selectedCrypto.simbolo} = {selectedCrypto.prezzo} $</Card.Text>
                        <Button 
                            variant="button" 
                            style={{ color: "black" }}
                            onClick={chiudiOperazione}
                            className="w-100 p-1 btn btn-warning" 
                            >Vendi
                        </Button>
                    </Card.Body>
                </Card>
            )}
        </>
    )
};
export default MyOperazione;
import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWalletUtenteCorrente } from "../redux/actions";

const MyOperazione = ({logo,selectedCrypto}) => {

    const dispatch = useDispatch();

    const navigator = useNavigate();

    const utenteCorrente = useSelector(state => state.utenteCorrente.userData);

    const walletCorrente = useSelector(state => state.walletCorrente.wallet);

    const [showCompra, setShowCompra] = useState(true);

    const [operazione, setOperazione] = useState({
        idWallet:walletCorrente.id,
	    simboloCrypto:"",
	    tipoOperazione: "BUY",
	    quantita:""
    });

    useEffect(() => {
        if(utenteCorrente && utenteCorrente.jwtToken){
            dispatch(getWalletUtenteCorrente(utenteCorrente.jwtToken));
        }
        setOperazione({ ...operazione, simboloCrypto: selectedCrypto.simbolo });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCrypto,utenteCorrente]);

    const handleCompraClick = () => {
        setShowCompra(true);
        setOperazione({ ...operazione, tipoOperazione: "BUY" });
    };

    const handleVendiClick = () => {
        setShowCompra(false);
        setOperazione({ ...operazione, tipoOperazione: "SELL" });
    };

    const compra = () => {
        if(utenteCorrente  && utenteCorrente.utente && utenteCorrente.jwtToken && walletCorrente){
            console.log(utenteCorrente);
            console.log(walletCorrente);
            console.log(operazione);
        }else{
            navigator('/login');
        }
    };

    const vendi = () => {
        if(utenteCorrente  && utenteCorrente.utente && utenteCorrente.jwtToken && walletCorrente){
            console.log(utenteCorrente);
            console.log(walletCorrente);
            console.log(operazione);
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
                                    <Form.Control 
                                        type="number"
                                        value={operazione.quantita}
                                        onChange={(e) => setOperazione({ ...operazione, quantita: e.target.value })}  
                                    />
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
                            onClick={compra}
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
                                    <Form.Control 
                                        type="number" 
                                        value={operazione.quantita}
                                        onChange={(e) => setOperazione({ ...operazione, quantita: e.target.value })} 
                                    />
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
                            onClick={vendi}
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
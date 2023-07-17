import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { effettuaOperazione, getWalletUtenteCorrente, operazioneSuccessReset, removeOperazioneError } from "../redux/actions";
import MyOperazioneModal from "./MyOperazioneModal";

const MyOperazione = ({ logo, selectedCrypto }) => {

    const dispatch = useDispatch();

    const { simbolo } = useParams();

    const cryptoSymbol = simbolo.toUpperCase();

    const utenteCorrente = useSelector(state => state.utenteCorrente.userData);

    const walletCorrente = useSelector(state => state.walletCorrente.wallet);

    //const rispostaOperazione = useSelector(state => state.effettuaOperazione.operazione);

    const success = useSelector(state => state.effettuaOperazione.success);
    const error = useSelector(state => state.effettuaOperazione.error);
    const loading = useSelector(state => state.effettuaOperazione.isLoading);

    const [showCompra, setShowCompra] = useState(true);

    const [operazione, setOperazione] = useState({
        idWallet: "",
        simboloCrypto: cryptoSymbol,
        tipoOperazione: "BUY",
        quantita: ""
    });

    const [showModal, setShowModal] = useState(false);

    const [modalTitle,setModalTitle] = useState("");
    const [modalMessage,setModalMessage] = useState("");

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    useEffect(() => {
        if (utenteCorrente && utenteCorrente.jwtToken) {
            dispatch(getWalletUtenteCorrente(utenteCorrente.jwtToken));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [utenteCorrente, success, error, loading]);

    useEffect(() => {
        if (walletCorrente) {
            setOperazione({ ...operazione, idWallet: walletCorrente.id });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [walletCorrente, success, error, loading]);

    const handleCompraClick = () => {
        setShowCompra(true);
        setOperazione({ ...operazione, tipoOperazione: "BUY" });
    };

    const handleVendiClick = () => {
        setShowCompra(false);
        setOperazione({ ...operazione, tipoOperazione: "SELL" });
    };

    const eseguiOperazione = async (e) => {
        e.preventDefault();

        dispatch(removeOperazioneError());
        
        handleShowModal();

        if (!operazione.quantita) {
            setModalTitle('Errore');
            setModalMessage('Inserire la quantita!');
            console.log('Inserire la quantita!');
        } else if (operazione.quantita && (!utenteCorrente || !utenteCorrente.utente || !utenteCorrente.jwtToken || !walletCorrente)) {
            setModalTitle('Errore');
            setModalMessage("Devi effettuare l'accesso per eseguire un operazione!");
            console.log("Devi effettuare l'accesso per eseguire un operazione!");
        } else if (operazione.quantita && utenteCorrente && utenteCorrente.utente && utenteCorrente.jwtToken && walletCorrente) {
            dispatch(effettuaOperazione(utenteCorrente.jwtToken, operazione));
        }
    };

    useEffect(() => {
        dispatch(removeOperazioneError());
        dispatch(operazioneSuccessReset());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log("SUCCESS: "+success);
    console.log(error);
    console.log("LOADING:" +loading);

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
                        <div className="d-flex justify-content-between mb-3 fs-6">
                            <Card.Text className="text-muted p-0 m-0 text-start w-50">1 {selectedCrypto.simbolo} = {selectedCrypto.prezzo ? selectedCrypto.prezzo.toFixed(2) : ''} $</Card.Text>
                            {walletCorrente && walletCorrente.listaAsset && walletCorrente.listaAsset.some(asset => asset.crypto.id === selectedCrypto.id) && (
                                <Card.Text className="text-muted p-0 m-0 text-end w-50">
                                    Wallet {walletCorrente.listaAsset.find(asset => asset.crypto.id === selectedCrypto.id).quantita}
                                </Card.Text>
                            )}
                        </div>
                        <Button
                            variant="button"
                            style={{ color: "black" }}
                            onClick={eseguiOperazione}
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
                        <div className="d-flex justify-content-between mb-3 fs-6">
                            <Card.Text className="text-muted p-0 m-0 text-start w-50">1 {selectedCrypto.simbolo} = {selectedCrypto.prezzo ? selectedCrypto.prezzo.toFixed(2) : ''} $</Card.Text>
                            {walletCorrente && walletCorrente.listaAsset && walletCorrente.listaAsset.some(asset => asset.crypto.id === selectedCrypto.id) && (
                                <Card.Text className="text-muted p-0 m-0 text-end w-50">
                                    Wallet {walletCorrente.listaAsset.find(asset => asset.crypto.id === selectedCrypto.id).quantita}
                                </Card.Text>
                            )}
                        </div>
                        <Button
                            variant="button"
                            style={{ color: "black" }}
                            onClick={eseguiOperazione}
                            className="w-100 p-1 btn btn-warning"
                        >Vendi
                        </Button>
                    </Card.Body>
                </Card>
            )}
            {!loading && (
                <MyOperazioneModal showModal={showModal} handleCloseModal={handleCloseModal} modalMessage={modalMessage} modalTitle={modalTitle} />
            )}
        </>
    )
};
export default MyOperazione;
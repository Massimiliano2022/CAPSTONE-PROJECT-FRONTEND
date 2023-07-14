/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Alert, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { registraSuccessReset, registraUtente, removeRegistraError } from "../redux/actions";

const MySignup = () => {

    const navigator = useNavigate();

    const dispatch = useDispatch();

    const success = useSelector(state => state.registraUtente.success);
    const error = useSelector(state => state.registraUtente.error);
    const loading = useSelector(state => state.registraUtente.isLoading);

    const [warningNome, setWarningNome] = useState("");
    const [warningCognome, setWarningCognome] = useState("");
    const [warningEmail, setWarningEmail] = useState("");
    const [warningPassword, setWarningPassword] = useState("");
    
    const [utente, setUtente] = useState({
        nome: "",
        cognome: "",
        email: "",
        password: ""
    });

    const handleClick = (e) => {
        e.preventDefault();

        setWarningNome("");
        setWarningCognome("");
        setWarningEmail("");
        setWarningPassword("");

        dispatch(removeRegistraError());

        if ((!utente.nome) || (!utente.cognome) || (!utente.email || !/\S+@\S+\.\S+/.test(utente.email)) || (!utente.password || utente.password.length < 3)) {
            if (!utente.nome) {
                setWarningNome('Il nome è obbligatorio.');
            }
            if (!utente.cognome) {
                setWarningCognome('Il cognome è obbligatorio.');
            }
            if (!utente.email) {
                setWarningEmail('L\'email è obbligatoria.');
            } else if (!/\S+@\S+\.\S+/.test(utente.email)) {
                setWarningEmail('L\'email non è valida.');
            }
            if (!utente.password) {
                setWarningPassword('La password è obbligatoria.');
            } else if (utente.password.length < 3) {
                setWarningPassword('La password deve contenere almeno 3 caratteri.');
            }
        } else {
            dispatch(registraUtente(utente));
        }
    }

    useEffect(() => {
        dispatch(removeRegistraError());
        dispatch(registraSuccessReset());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Container fluid className="text-light px-5" style={{ background: "#1E1E1E" }}>
                <Row className="py-5" style={{ minHeight: "70vh" }}>
                    <Col className="d-flex justify-content-center align-items-center flex-column">
                        <div className="p-5" style={{ background: "#2d2d2d" }}>
                            <h2 className="text-center">Iscriviti</h2>
                            <Form>
                                <Form.Group className="mb-3" controlId="nome">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={utente.nome}
                                        onChange={(e) => setUtente({ ...utente, nome: e.target.value })}
                                    />
                                    {warningNome && (
                                        <p className="text-danger">{warningNome}</p>
                                    )}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="cognome">
                                    <Form.Label>Cognome</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={utente.cognome}
                                        onChange={(e) => setUtente({ ...utente, cognome: e.target.value })}
                                    />
                                    {warningCognome && (
                                        <p className="text-danger">{warningCognome}</p>
                                    )}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={utente.email}
                                        onChange={(e) => setUtente({ ...utente, email: e.target.value })}
                                    />
                                    {warningEmail && (
                                        <p className="text-danger">{warningEmail}</p>
                                    )}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={utente.password}
                                        onChange={(e) => setUtente({ ...utente, password: e.target.value })}
                                    />
                                    {warningPassword && (
                                        <p className="text-danger">{warningPassword}</p>
                                    )}
                                </Form.Group>
                                <button
                                    type="button"
                                    style={{ color: "black" }}
                                    onClick={handleClick}
                                    disabled={success}
                                    className="btn btn-warning mt-3 text-center rounded rounded-1 p-2 w-100"
                                >{loading ? (
                                    <>
                                        <Spinner animation="grow" size="sm" className="me-2" />
                                    </>
                                ) : (
                                    "Iscriviti"
                                )}
                                </button>
                            </Form>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <p className="m-0 fs-6">Hai già un account?</p>
                                <NavLink
                                    to={"/login"}
                                    activeclassname="active"
                                    className="nav-link ps-3 fs-6"
                                    style={{ color: "#EBB60B" }}
                                >
                                    Accedi
                                </NavLink>
                            </div>
                            {error && error.message &&(
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <Alert className="w-100 text-center" variant="danger">{error.message}</Alert>
                                </div>
                            )}
                            {success && (
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <Alert className="w-100 text-center" variant="success">Registrazione effettuata con successo!</Alert>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default MySignup;
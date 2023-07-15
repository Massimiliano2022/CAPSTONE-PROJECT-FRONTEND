import { useEffect, useState } from "react";
import { Alert, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getUtenteCorrente, loginSuccessReset, removeLoginError } from "../redux/actions";

const MyLogin = () => {

    const navigator = useNavigate();

    const dispatch = useDispatch();

    const utenteCorrente = useSelector(state => state.utenteCorrente.userData);
    const error = useSelector(state => state.utenteCorrente.error);
    const loading = useSelector(state => state.utenteCorrente.isLoading);
    const success = useSelector(state => state.utenteCorrente.success);

    const [warningEmail, setWarningEmail] = useState("");
    const [warningPassword, setWarningPassword] = useState("");

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const [utente, setUtente] = useState({
        email: "",
        password: ""
    });

    const handleClick = (e) => {
        e.preventDefault();

        setWarningEmail("");
        setWarningPassword("");

        dispatch(removeLoginError());

        if ((!utente.email || !/\S+@\S+\.\S+/.test(utente.email)) || (!utente.password || utente.password.length < 3)) {
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
            dispatch(getUtenteCorrente(utente));
        }
    }

    useEffect(() => {
        dispatch(removeLoginError());
        setShowSuccessAlert(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (utenteCorrente && utenteCorrente.jwtToken && success) {
            setShowSuccessAlert(true);
            const timer = setTimeout(() => {
                dispatch(loginSuccessReset());
                setShowSuccessAlert(false);
                navigator('/');
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [utenteCorrente, success, dispatch, navigator]);

    return (
        <>
            <Container fluid className="text-light px-5" style={{ background: "#1E1E1E" }}>
                <Row>
                    <Col className="d-flex justify-content-center align-items-center flex-column login-div">
                        <div className="p-5 d-flex flex-column justify-content-center" style={{ background: "#2d2d2d" }}>
                            <h2 className="text-center">Accedi</h2>
                            <Form>
                                <Form.Group className="mb-2" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={utente.email}
                                        onChange={(e) => setUtente({ ...utente, email: e.target.value })}
                                    />
                                    {warningEmail && (
                                        <p className="text-danger mb-2">{warningEmail}</p>
                                    )}
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={utente.password}
                                        onChange={(e) => setUtente({ ...utente, password: e.target.value })}
                                    />
                                    {warningPassword && (
                                        <p className="text-danger mb-2">{warningPassword}</p>
                                    )}
                                </Form.Group>
                                <button
                                    type="button"
                                    onClick={handleClick}
                                    style={{ color: "black" }}
                                    disabled={loading}
                                    className="btn btn-warning mt-2 text-center rounded rounded-1 p-2 w-100"
                                >
                                    {showSuccessAlert || loading ? (
                                        <>
                                            <Spinner animation="grow" size="sm" className="me-2" />
                                        </>
                                    ) : (
                                        'Accedi'
                                    )}
                                </button>
                            </Form>
                            <div className="d-flex justify-content-between align-items-center mt-2">
                                <p className="m-0 fs-6">Non hai un account?</p>
                                <NavLink
                                    to={"/signup"}
                                    activeclassname="active"
                                    className="nav-link ps-3 fs-6"
                                    style={{ color: "#EBB60B" }}
                                >
                                    Registrati
                                </NavLink>
                            </div>
                            {error && (
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <Alert className="w-100 text-center" variant="danger">{error.message}</Alert>
                                </div>
                            )}
                            {showSuccessAlert && (
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <Alert className="w-100 text-center" variant="success">Accesso effettuato!</Alert>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default MyLogin;
import { useEffect, useState } from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getUtenteCorrente, removeLoginError } from "../redux/actions";

const MyLogin = () => {

    const dispatch = useDispatch();

    const navigator = useNavigate();

    const error = useSelector(state => state.utenteCorrente.error);

    const utenteCorrente = useSelector(state => state.utenteCorrente.userData);

    const [utente, setUtente] = useState({
        email: "",
        password: ""
    });

    const handleClick = (e) => {
        e.preventDefault();
        if (
            (!utente.email || !/\S+@\S+\.\S+/.test(utente.email)) ||
            (!utente.password || utente.password.length < 3)
        ) {
            if (!utente.email) {
                console.log('L\'email è obbligatoria.');
            } else if (!/\S+@\S+\.\S+/.test(utente.email)) {
                console.log('L\'email non è valida.');
            }

            if (!utente.password) {
                console.log('La password è obbligatoria.');
            } else if (utente.password.length < 3) {
                console.log('La password deve contenere almeno 3 caratteri.');
            }
        } else {
            dispatch(getUtenteCorrente(utente));
        }
    }

    useEffect(() => {
        dispatch(removeLoginError());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (utenteCorrente && utenteCorrente.jwtToken) {
            navigator('/');
        } else {
            console.log(error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [utenteCorrente, error]);

    return (
        <>
            <Container fluid className="text-light px-5" style={{ background: "#1E1E1E" }}>
                <Row className="py-5" style={{ minHeight: "70vh" }}>
                    <Col className="d-flex justify-content-center align-items-center flex-column">
                        <div className="p-5" style={{ background: "#2d2d2d" }}>
                            <h2 className="text-center">Accedi</h2>
                            <Form>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={utente.email}
                                        onChange={(e) => setUtente({ ...utente, email: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={utente.password}
                                        onChange={(e) => setUtente({ ...utente, password: e.target.value })}
                                    />
                                </Form.Group>
                                <button
                                    type="button"
                                    style={{ color: "black" }}
                                    onClick={handleClick}
                                    className="btn btn-warning mt-3 text-center rounded rounded-1 p-2 w-100"
                                >Accedi
                                </button>
                            </Form>
                            <div className="d-flex justify-content-between align-items-center mt-3">
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
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <Alert className="w-100 text-center" variant="danger">{error.message}</Alert>
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
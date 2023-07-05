/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Alert, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const MySignup = () => {

    const [utente, setUtente] = useState({
        nome: "",
        cognome: "",
        email: "",
        password: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const navigator = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            const response = await fetch(`http://localhost:3001/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(utente),
            });
            if (response.ok) {
                const userData = await response.json();
                navigator("/login");
            } else {
                const errorData = await response.json();
                console.log(errorData);
                setError("Ci sono stati errori in fase di registrazione");
                setTimeout(() => {
                    setIsLoading(false); 
                }, 500);
            }
        } catch (error) {
            console.log(error);
            setError("Si è verificato un errore. Riprova più tardi.");
        }
    };


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
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="cognome">
                                    <Form.Label>Cognome</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={utente.cognome}
                                        onChange={(e) => setUtente({ ...utente, cognome: e.target.value })}
                                    />
                                </Form.Group>
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
                                    disabled={isLoading}
                                    className="btn btn-warning mt-3 text-center rounded rounded-1 p-2 w-100"
                                >{isLoading ? (
                                    <>
                                        <Spinner animation="grow" size="sm" className="me-2" />
                                    </>
                                ) : (
                                    "Iscriviti"
                                )}
                                </button>
                            </Form>
                            {error && <Alert variant="danger">{error}</Alert>}
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default MySignup;
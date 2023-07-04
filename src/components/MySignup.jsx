import { Col, Container, Form, Row } from "react-bootstrap";

const MySignup = () => {
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
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="cognome">
                                    <Form.Label>Cognome</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" />
                                </Form.Group>
                                <button type="button" className="btn mt-3 text-center rounded rounded-1 p-2 w-100" style={{ background: "#EBB60B" }}>Iscriviti</button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default MySignup;
import { Container, Row } from "react-bootstrap";

const MyWallet =() => {
    return(
        <>
            <Container fluid className="text-light px-5" style={{ background: "#1E1E1E" }}>
                <Row className="pt-5">
                    <h2>Wallet</h2>
                </Row>
            </Container>
        </>            
    );
}
export default MyWallet;
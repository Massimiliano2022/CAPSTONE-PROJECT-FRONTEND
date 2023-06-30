import logo from '../img/DigitFin.png'
import { Container, Nav, Navbar,Button } from "react-bootstrap";


const MyNav = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary sticky-top" style={{ background: "#2d2d2d"}}>
            <Container fluid className="px-5">
                <div className="d-flex align-items-center">
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo" style={{ width: "175px" }} />
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home" className="text-light">Deposita</Nav.Link>
                        <Nav.Link href="#home" className="text-light">Compra Crypto</Nav.Link>
                        <Nav.Link href="#link" className="text-light">Wallet</Nav.Link>
                        <Nav.Link href="#link" className="text-light">Report Operazioni</Nav.Link>
                    </Nav>
                </div>
                <Nav>
                    <Button
                        type="button"
                        variant="link"
                        className="nav-link text-light"
                    >
                        Accedi
                    </Button>
                    <Button
                        type="button"
                        variant="warning"
                        className="text-dark rounded rounded-1 rounded-start-0 p-2"
                    >
                        Registrati
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default MyNav;